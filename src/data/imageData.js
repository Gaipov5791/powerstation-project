const images = Object.entries(import.meta.glob('../assets/img/*.jpg', { eager: true }))
  .map(([path, module], index) => ({
    src: module.default,
    alt: `Image ${index + 1}`,
  }));

export default images;

  
  
  