export { PACKAGE_NAME } from './package-name';
export { createContainer } from './create-container';
export { getCameraPermissions } from './get-permissions';
export { getBase64FromWebp, convertBlobToBase64 } from './get-base64-from-webp';
export { takePhoto } from './take-photo';
export { pickGalleryPhotos } from './pick-photos';
export { uploadPhotos, type IUploadPhotosOptions } from './upload-photos';
export { uploadGallery, type IUploadGalleryOptions } from './upload-gallery';
export { downloadImages } from './download-images';
export { CapacitorCamera } from './components/camera';
export { ImageCard } from './components/image-card';
export { useCamera, type IUseCameraOptions } from './hooks/use-camera';
export { useGallery, type IUseGalleryOptions } from './hooks/use-gallery';
export { useContainer } from './hooks/use-container';
export { usePermissions } from './hooks/use-permissions';
export { type Photo, type ImageOptions, type GalleryPhoto, type GalleryImageOptions } from '@capacitor/camera';
export { LinkName } from './link-name';

import { takePhoto } from './take-photo';
import { pickGalleryPhotos } from './pick-photos';
import { uploadPhotos } from './upload-photos';
import { uploadGallery } from './upload-gallery';

export const Camera = {
  takePhoto,
  pickGalleryPhotos,
  uploadPhotos,
  uploadGallery
}