// NOTE:
// All Thai content APIs have been removed as per project requirements.
// These arrays are kept empty so existing imports don't break.

// Portrait thumbnails (110 x 165)
export const portraitImages = []

// Portrait video URLs (matching thumbnails)
export const portraitVideos = []

// Landscape thumbnails
export const landscapeImages = []

// Landscape video URLs (matching thumbnails)
export const landscapeVideos = []

// Helper functions to get video URL by thumbnail index (returns null with empty arrays)
export const getPortraitVideo = (thumbnailIndex) => {
  return portraitVideos[thumbnailIndex] || null
}

export const getLandscapeVideo = (thumbnailIndex) => {
  return landscapeVideos[thumbnailIndex] || null
}
