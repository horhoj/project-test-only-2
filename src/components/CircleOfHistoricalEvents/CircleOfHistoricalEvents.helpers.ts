interface GetTransformDataPayload {
  idxForNewPosition: number;
  length: number;
  idxForCurrentPosition: number;
  currentAngle: number;
}

export const getTransformData = ({
  currentAngle,
  idxForCurrentPosition,
  idxForNewPosition,
  length,
}: GetTransformDataPayload) => {
  const lCol = Math.floor(length / 2);

  for (let i = 1; i <= lCol; i++) {
    const currentIdx =
      idxForCurrentPosition - i < 0
        ? idxForCurrentPosition - i + length
        : idxForCurrentPosition - i;
    if (idxForNewPosition === currentIdx) {
      const angle = currentAngle - i * (360 / length);
      const transformTransitionSpeed = i * 1000;
      return { angle, transformTransitionSpeed };
    }
  }

  const rCol = Math.floor(length / 2) - (length % 2 === 0 ? 1 : 0);

  for (let i = 1; i <= rCol; i++) {
    const currentIdx =
      idxForCurrentPosition + i >= length
        ? idxForCurrentPosition + i - length
        : idxForCurrentPosition + i;
    if (idxForNewPosition === currentIdx) {
      const angle = currentAngle + i * (360 / length);
      const transformTransitionSpeed = i * 1000;
      return { angle, transformTransitionSpeed };
    }
  }
};
