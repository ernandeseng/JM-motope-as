import React from 'react';

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
  
export const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

export const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m.01 1.64c4.56 0 8.27 3.71 8.27 8.27 0 4.56-3.71 8.27-8.27 8.27-1.55 0-3.05-.43-4.38-1.21l-.3-.18-3.23.85.87-3.15-.2-.32a8.19 8.19 0 0 1-1.26-4.52c0-4.56 3.71-8.27 8.27-8.27m4.47 11.23c-.22.44-.82.85-1.25 1.02-.56.23-1.04.22-1.4-.08s-.68-.61-.92-.92c-.23-.31-.48-.61-.79-.9-.31-.29-.62-.48-.9-.68-.28-.2-.56-.31-.85-.31-.29 0-.58.09-.85.31-.27.22-.44.5-.61.8-.17.3-.28.61-.39.92-.11.31-.22.61-.22.92s.17.61.39.85c.22.23.49.44.79.61s.61.3.92.39c.31.09.61.15.92.15.46 0 .9-.1 1.3-.31.4-.2.75-.48 1.06-.85.31-.36.53-.79.65-1.25.12-.46.09-.92-.04-1.38Z" />
  </svg>
);
