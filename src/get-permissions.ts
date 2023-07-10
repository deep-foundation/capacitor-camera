
import { Camera, PermissionStatus } from "@capacitor/camera";

/**
 * Get camera permissions.
 */

export const getCameraPermissions = async () => {
  const cameraPermissions= await Camera.requestPermissions();
  return cameraPermissions as PermissionStatus | undefined ;
}