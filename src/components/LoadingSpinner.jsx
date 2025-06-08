import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="h-8 w-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
