const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = path.join(__dirname, '..', 'assets', 'frames');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'assets', 'frames-2k');
const CONCURRENCY = 4;
const TOTAL_FRAMES = 250;

// Configuration matching prompt specifications
const CONFIG = {
  width: 2560,
  height: 1440,
  kernel: sharp.kernel.lanczos3,
  sharpen: {
    sigma: 0.8,
    m1: 1.0,
    m2: 0.5,
  },
  webp: {
    quality: 86,
    effort: 4,
  },
};

async function processFrame(frameIndex) {
  const numStr = String(frameIndex).padStart(3, '0');
  const filenameJpg = `ezgif-frame-${numStr}.jpg`;
  const filenameWebp = `ezgif-frame-${numStr}.webp`;
  const inputPath = path.join(INPUT_DIR, filenameJpg);
  const outputPath = path.join(OUTPUT_DIR, filenameWebp);

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input file does not exist: ${inputPath}`);
  }

  await sharp(inputPath)
    .resize(CONFIG.width, CONFIG.height, {
      kernel: CONFIG.kernel,
      fit: 'cover',
      position: 'center',
    })
    .sharpen({
      sigma: CONFIG.sharpen.sigma,
      m1: CONFIG.sharpen.m1,
      m2: CONFIG.sharpen.m2,
    })
    .webp({
      quality: CONFIG.webp.quality,
      effort: CONFIG.webp.effort,
    })
    .toFile(outputPath);

  return { frameIndex, filenameWebp };
}

async function run() {
  const startTime = Date.now();
  console.log(`[Hero Engineer] Starting 2K QHD upscale & optimization...`);
  console.log(`Input: ${INPUT_DIR}`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`Target: 2560x1440 WebP (Q86, effort 4, Lanczos3, unsharp sigma 0.8 / flat 1.0 / jagged 0.5)`);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }

  const indices = Array.from({ length: TOTAL_FRAMES }, (_, i) => i + 1);
  let completed = 0;

  // Worker pool for concurrency
  let nextIdx = 0;
  async function worker() {
    while (nextIdx < indices.length) {
      const idx = indices[nextIdx++];
      await processFrame(idx);
      completed++;
      if (completed % 25 === 0 || completed === TOTAL_FRAMES) {
        const pct = ((completed / TOTAL_FRAMES) * 100).toFixed(0);
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`[Hero Engineer] Progress: ${completed}/${TOTAL_FRAMES} frames (${pct}%) in ${elapsed}s`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`[Hero Engineer] Successfully converted all ${TOTAL_FRAMES} frames to 2K WebP in ${totalTime}s!`);
}

if (require.main === module) {
  run().catch((err) => {
    console.error('[Hero Engineer] Upscale failed:', err);
    process.exit(1);
  });
}

module.exports = { processFrame, CONFIG, INPUT_DIR, OUTPUT_DIR };
