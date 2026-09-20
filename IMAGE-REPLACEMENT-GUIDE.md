# Carmate: replacing photos and videos

Open media.js in the website folder. Every image has a named slot. Put your new images in assets/ and change the corresponding filename. The layout and scroll animations stay in place.

- logo: optional transparent Carmate logo; leave empty for the text wordmark.
- hero: landscape headlight or car close-up, ideally 1920 × 1080.
- detailGrill, detailRear, detailFinish: portrait images for the staggered services section.
- filmPoster: wide image for the cinematic showcase.
- aboutMain: the central image; about1–about6: the surrounding collage.
- project1–project3: tall photographs for the three service cards.
- contact: wide interior or workshop image behind the contact area.

Optional video slots: heroVideo, detailGrillVideo, detailRearVideo, detailFinishVideo, filmVideo. Set any to a local MP4 or WebM path. Background videos autoplay silently, loop, and pause off-screen; the main film starts when the play button is pressed. Blank video slots use photos. The current showcase plays a photo sequence because the reference video server denied external playback.

The contact number, WhatsApp number, and address are in media.js. The WhatsApp form opens a prepared message for the visitor to review and send. No enquiries are stored on this static site.

The site uses the reference motion settings: custom easing, 0.8-second text reveals, 18ms letter stagger, 0.9-second expanding image reveals, 0.125 scroll interpolation, hero shrink on scroll, and responsive layered collage parallax. Reduced-motion preferences disable decorative movement.

The photos are temporary Spyker reference imagery; replace them with Carmate work before client launch. The hero is an AI-generated reference-style image.

This source package contains the website and editable media configuration, not a hosted admin dashboard. After changing files, redeploy the site to update its hosted version.
