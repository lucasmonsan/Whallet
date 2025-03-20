export function nextCard(activeIndex: number, maxIndex: number): number {
  return Math.min(activeIndex + 1, maxIndex - 1);
}

export function prevCard(activeIndex: number): number {
  return Math.max(activeIndex - 1, 0);
}

export function handleTouchStart(event: TouchEvent): number {
  return event.touches[0].clientX;
}

export function handleTouchMove(event: TouchEvent): number {
  return event.touches[0].clientX;
}

export function handleTouchEnd(
  touchStartX: number | null,
  touchEndX: number | null,
  isSwiping: boolean,
  callback: (deltaX: number) => void
): void {
  if (touchStartX !== null && touchEndX !== null && !isSwiping) {
    const deltaX = touchEndX - touchStartX;
    callback(deltaX);
  }
}