interface RefreshIconProps {
  size?: number;
}

export default function RefreshIcon({ size = 16 }: RefreshIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 15.5C11.9644 15.5 13.6882 14.4702 14.6611 12.921L15.7945 13.9285C14.5353 15.7822 12.4099 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.5265 3 16.4439 5.60771 16.9291 9H18.204C18.6895 9 18.9326 9.57851 18.5893 9.91685L16.6353 11.8427C16.4225 12.0524 16.0775 12.0524 15.8647 11.8427L13.9107 9.91685C13.5674 9.57851 13.8105 9 14.296 9H15.4093C14.9391 6.43988 12.6961 4.5 10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5Z"
        style={{ fill: "var(--klleon-color-icon-action)" }}
      />
    </svg>
  );
}
