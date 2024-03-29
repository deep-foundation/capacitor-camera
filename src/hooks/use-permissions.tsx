import { useState, useEffect } from "react";
import { PermissionStatus } from "@capacitor/camera";
import { getCameraPermissions } from "../get-permissions.js";

/**
 * Custom hook for obtaining camera permissions.
 */
export const usePermissions = () => {
  // State variable for storing the camera permissions.
  const [cameraPermissions, setCameraPermissions] = useState<PermissionStatus | undefined>(undefined);

  useEffect(() => {
    if (typeof (window) !== undefined) { 
      import('@ionic/pwa-elements/loader').then(({ defineCustomElements }) => {
        defineCustomElements(window);
      });
     } // Define custom camera elements if running in a browser window.
    else getPermissions(); // Get camera permissions on other platforms.
  });

  const getPermissions = async () => {
    const newCameraPermissions = await getCameraPermissions(); // Request camera permissions.
    setCameraPermissions(newCameraPermissions); // Set the camera permissions state.
  }
  return { cameraPermissions, getPermissions }
}