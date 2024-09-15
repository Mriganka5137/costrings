import { cn } from "@/lib/utils";
import React from "react";

interface HeartBeatProps {
  className?: string;
}

const HeartBeat = ({ className }: HeartBeatProps) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("bord", className)}
    >
      <path
        d="M0 20C0 12.5231 0 8.78461 1.6077 6C2.66092 4.17577 4.17577 2.66092 6 1.6077C8.78461 0 12.5231 0 20 0C27.4769 0 31.2154 0 34 1.6077C35.8242 2.66092 37.3391 4.17577 38.3923 6C40 8.78461 40 12.5231 40 20C40 27.4769 40 31.2154 38.3923 34C37.3391 35.8242 35.8242 37.3391 34 38.3923C31.2154 40 27.4769 40 20 40C12.5231 40 8.78461 40 6 38.3923C4.17577 37.3391 2.66092 35.8242 1.6077 34C0 31.2154 0 27.4769 0 20Z"
        fill="#F3F3F4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.5327 13.25H22.9464L25.7578 20.2785H27.5V21.7785H24.7422L22.3448 15.7849L18.8423 27.3291H17.4379L15.0095 21.7785H11.75V20.2785H15.9905L17.9999 24.8714L21.5327 13.25Z"
        fill="#494656"
      />
      <rect x="26" y="10" width="6" height="6" rx="3" fill="#0ED065" />
    </svg>
  );
};

export default HeartBeat;
