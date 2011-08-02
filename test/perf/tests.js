// These are the test files in this dir to be run.
var tests = [
  { path: "empty-baseline.pde", tags: ["Calibration"] },
  { path: "background.pde", tags: ["2D"] },
  { path: "transparent-background.pde", tags: ["2D"] },
  { path: "endshape.pde", tags: ["2D"] },
  { path: "random-ellipse.pde", tags: ["2D"] },
  { path: "random-point.pde", tags: ["2D"] },
  { path: "random-fill.pde", tags: ["2D"] },
  { path: "random-line.pde", tags: ["2D"] },
  { path: "triangle.pde", tags: ["2D"] },
  { path: "arc.pde", tags: ["2D"] },
  { path: "blendcolor-blend.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-add.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-subtract.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-darkest.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-lightest.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-difference.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-exclusion.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-multiply.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-screen.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-overlay.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-hard_light.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-soft_light.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-dodge.pde", tags: ["2D", "Blend"] },
  { path: "blendcolor-burn.pde", tags: ["2D", "Blend"] },
  { path: "pimage-resize.pde", tags: ["2D", "PImage"] },
  { path: "pimage-mask-image.pde", tags: ["2D", "PImage"] },
  { path: "pimage-copy.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-filter-threshold.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-filter-gray.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-filter-invert.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-filter-posterize4.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-filter-blur3.pde", tags: ["2D", "PImage"], iterationOverride: 10 },
  { path: "pimage-filter-opaque.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-filter-erode.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-filter-dilate.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-blend.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-add.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-subtract.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-darkest.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-lightest.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-difference.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-exclusion.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-multiply.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-screen.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-overlay.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-hardlight.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-softlight.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-dodge.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "pimage-blend-burn.pde", tags: ["2D", "PImage"], iterationOverride: 100 },
  { path: "image-fractional-coords.pde", tags: ["2D", "PImage"] },
  { path: "image-whole-coords.pde", tags: ["2D", "PImage"] },
  { path: "rainbow-spirograph.pde", tags: ["2D"] },
  { path: "pvector-ctor.pde", tags: ["2D", "PVector"] },
  { path: "pvector-get.pde", tags: ["2D", "PVector"] },
  { path: "pvector-set.pde", tags: ["2D", "PVector"] },
  { path: "pvector-add.pde", tags: ["2D", "PVector"] },
  { path: "pvector-sub.pde", tags: ["2D", "PVector"] },
  { path: "pvector-anglebetween.pde", tags: ["2D", "PVector"] },
  { path: "pvector-array.pde", tags: ["2D", "PVector"] },
  { path: "pvector-cross.pde", tags: ["2D", "PVector"] },
  { path: "pvector-dist.pde", tags: ["2D", "PVector"] },
  { path: "pvector-div.pde", tags: ["2D", "PVector"] },
  { path: "pvector-dot.pde", tags: ["2D", "PVector"] },
  { path: "pvector-limit.pde", tags: ["2D", "PVector"] },
  { path: "pvector-mag.pde", tags: ["2D", "PVector"] },
  { path: "pvector-mult.pde", tags: ["2D", "PVector"] },
  { path: "pvector-normalize.pde", tags: ["2D", "PVector"] },
  { path: "plants.pde", tags: ["2D"] }
];
