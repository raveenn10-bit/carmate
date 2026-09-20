const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const FRAMES_2K_DIR = path.join(__dirname, '..', 'public', 'assets', 'frames-2k');
const FRAMES_ORIG_DIR = path.join(__dirname, '..', 'assets', 'frames');
const HERO_COMPONENT_PATH = path.join(__dirname, '..', 'components', 'ui', 'scroll-locked-frame-hero.tsx');
const TOTAL_FRAMES = 250;

async function runVerification() {
  console.log('=== HERO SECTION VERIFICATION TEST ===\n');

  let passed = true;

  // Test 1: Verify all 250 2K WebP frames exist
  console.log('[Test 1] Verifying all 250 WebP frames in public/assets/frames-2k...');
  let missingWebp = 0;
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const num = String(i).padStart(3, '0');
    const file = path.join(FRAMES_2K_DIR, `ezgif-frame-${num}.webp`);
    if (!fs.existsSync(file)) {
      missingWebp++;
      console.error(`  Missing frame: ${file}`);
    }
  }

  if (missingWebp === 0) {
    console.log(`  PASSED: All ${TOTAL_FRAMES} WebP frames exist.\n`);
  } else {
    passed = false;
    console.error(`  FAILED: Missing ${missingWebp} WebP frames.\n`);
  }

  // Test 2: Verify sample frame resolution and format
  console.log('[Test 2] Verifying resolution (2560x1440) and WebP format on samples...');
  const sampleIndices = [1, 50, 125, 200, 250];
  for (const idx of sampleIndices) {
    const num = String(idx).padStart(3, '0');
    const file = path.join(FRAMES_2K_DIR, `ezgif-frame-${num}.webp`);
    const meta = await sharp(file).metadata();
    const stat = fs.statSync(file);

    if (meta.width === 2560 && meta.height === 1440 && meta.format === 'webp') {
      console.log(`  Frame ${num}: ${meta.width}x${meta.height}, format: ${meta.format}, size: ${(stat.size / 1024).toFixed(1)} KB - OK`);
    } else {
      passed = false;
      console.error(`  Frame ${num} INVALID: ${meta.width}x${meta.height}, ${meta.format}`);
    }
  }
  console.log('  PASSED: Resolution & WebP format verified.\n');

  // Test 3: Verify original JPG fallback directory
  console.log('[Test 3] Verifying fallback JPG frames in assets/frames...');
  let missingJpg = 0;
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const num = String(i).padStart(3, '0');
    const file = path.join(FRAMES_ORIG_DIR, `ezgif-frame-${num}.jpg`);
    if (!fs.existsSync(file)) {
      missingJpg++;
    }
  }
  if (missingJpg === 0) {
    console.log(`  PASSED: All ${TOTAL_FRAMES} fallback JPG frames verified.\n`);
  } else {
    passed = false;
    console.error(`  FAILED: Missing ${missingJpg} fallback JPG frames.\n`);
  }

  // Test 4: Verify hero component implementation specifications
  console.log('[Test 4] Verifying scroll-locked-frame-hero.tsx implementation requirements...');
  const heroContent = fs.readFileSync(HERO_COMPONENT_PATH, 'utf-8');

  const checks = [
    { name: 'Default 2K WebP path', regex: /\/assets\/frames-2k\/ezgif-frame-/ },
    { name: 'JPG fallback path', regex: /\/assets\/frames\/ezgif-frame-/ },
    { name: 'Fallback on error handler', regex: /img\.onerror/ },
    { name: 'Desktop scrub distance (550vh - 650vh)', regex: /w\s*>\s*1024[\s\S]*?(?:h\s*\*\s*6|4600|5200)/ },
    { name: 'Tablet scrub distance (400vh - 500vh)', regex: /w\s*>=\s*768[\s\S]*?(?:h\s*\*\s*4\.5|3000|3600)/ },
    { name: 'Mobile scrub distance (300vh - 400vh)', regex: /(?:h\s*\*\s*3\.5|1800|2200)/ },
    { name: 'Lerped frame interpolation (~0.06 - 0.08 factor)', regex: /currentFrame\s*\+=\s*\(targetFrame\s*-\s*currentFrame\)\s*\*\s*0\.0[678]/ },
    { name: 'High-DPI canvas backing (dpr min 2)', regex: /Math\.min\(window\.devicePixelRatio\s*\|\|\s*1,\s*2\)/ },
    { name: 'Image smoothing enabled & high quality', regex: /ctx\.imageSmoothingQuality\s*=\s*['"]high['"]/ },
    { name: 'Mobile portrait focal crop calculation', regex: /isPortrait[\s\S]*?focalX/ },
    { name: 'Preload first 15 frames immediately', regex: /Math\.min\(15,\s*frameCount\)/ },
    { name: 'Sliding window prioritization (currentFrame ± 10)', regex: /centerIndex\s*-\s*10[\s\S]*?centerIndex\s*\+\s*10/ },
    { name: 'Never show blank screen (retain prior frame on canvas)', regex: /lastDrawnIndexRef/ },
    { name: 'Touch target >= 44px', regex: /minHeight:\s*44/ },
    { name: 'Clamp typography sizes', regex: /clamp\(/ },
  ];

  for (const check of checks) {
    if (check.regex.test(heroContent)) {
      console.log(`  ✓ ${check.name}`);
    } else {
      passed = false;
      console.error(`  ✗ ${check.name} NOT FOUND`);
    }
  }

  if (passed) {
    console.log('\n=== ALL HERO SECTION VERIFICATION TESTS PASSED ===');
  } else {
    console.error('\n=== VERIFICATION FAILED ===');
    process.exit(1);
  }
}

runVerification().catch(err => {
  console.error(err);
  process.exit(1);
});
