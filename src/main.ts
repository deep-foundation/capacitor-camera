export { PACKAGE_NAME } from './package-name.js';
export { createContainer } from './create-container.js';
export { getCameraPermissions } from './get-permissions.js';
export { getBase64FromWebp, convertBlobToBase64 } from './get-base64-from-webp.js';
export { takePhoto } from './take-photo.js';
export { pickGalleryPhotos } from './pick-photos.js';
export { uploadPhotos, type IUploadPhotosOptions } from './upload-photos.js';
export { uploadGallery, type IUploadGalleryOptions } from './upload-gallery.js';
export { downloadImages } from './download-images.js';
export { CapacitorCamera } from './components/camera.js';
export { ImageCard } from './components/image-card.js';
export { useCamera, type IUseCameraOptions } from './hooks/use-camera.js';
export { useGallery, type IUseGalleryOptions } from './hooks/use-gallery.js';
export { useContainer } from './hooks/use-container.js';
export { usePermissions } from './hooks/use-permissions.js';
export { type Photo, type ImageOptions, type GalleryPhoto, type GalleryImageOptions } from '@capacitor/camera';
export { LinkName } from './link-name.js';

import { takePhoto } from './take-photo.js';
import { pickGalleryPhotos } from './pick-photos.js';
import { uploadPhotos } from './upload-photos.js';
import { uploadGallery } from './upload-gallery.js';

export {Package,PackageOptions} from './package.js'

export const Camera = {
  takePhoto,
  pickGalleryPhotos,
  uploadPhotos,
  uploadGallery
}