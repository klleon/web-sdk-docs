interface ClockIconProps {
  size?: number;
}

export default function ClockIcon({ size = 20 }: ClockIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        style={{ fill: "var(--klleon-color-icon-circle)" }}
      />
      <path
        d="M14.2425 5.75736C14.6525 6.16738 14.5906 6.82346 14.1806 7.23348L7.23336 14.1807C6.82334 14.5908 6.16726 14.6527 5.75724 14.2426C3.41409 11.8995 3.41409 8.1005 5.75724 5.75736C8.10038 3.41421 11.8994 3.41421 14.2425 5.75736Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6.25C10.4142 6.25 10.75 6.58579 10.75 7V9.59863L13.416 11.376C13.7607 11.6057 13.8538 12.0714 13.624 12.416C13.3943 12.7607 12.9286 12.8538 12.584 12.624L9.62851 10.6538C9.39204 10.4961 9.25 10.2307 9.25 9.94651V7C9.25 6.58579 9.58579 6.25 10 6.25Z"
        style={{ fill: "var(--klleon-color-icon-detail)" }}
      />
    </svg>
  );
}
