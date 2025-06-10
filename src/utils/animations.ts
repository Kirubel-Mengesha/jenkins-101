// Utility functions for animations and transitions

/**
 * Creates an intersection observer to trigger animations when elements enter viewport
 * @param selector - CSS selector for elements to observe
 * @param animationClass - CSS class to add when element is visible
 * @param threshold - Visibility threshold (0-1)
 */
export const createScrollAnimations = (
  selector: string, 
  animationClass: string,
  threshold: number = 0.1
): void => {
  const elements = document.querySelectorAll(selector);
  
  if (!elements.length) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          // Optionally unobserve after animation is triggered
          // observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );
  
  elements.forEach((el) => observer.observe(el));
};

/**
 * Smoothly scrolls to a specific element
 * @param elementId - ID of the target element
 * @param offset - Offset from the top (e.g., for fixed headers)
 */
export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId);
  
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Adds a delay between multiple animations
 * @param selector - CSS selector for elements to animate
 * @param animationClass - CSS class to add for animation
 * @param delayBetween - Delay in ms between each element's animation
 */
export const staggeredAnimation = (
  selector: string,
  animationClass: string,
  delayBetween: number = 100
): void => {
  const elements = document.querySelectorAll(selector);
  
  if (!elements.length) return;
  
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add(animationClass);
    }, index * delayBetween);
  });
};