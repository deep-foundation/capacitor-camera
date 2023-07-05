import React, { useState, useEffect } from 'react';
import { GalleryPhoto, GalleryImageOptions } from '@capacitor/camera';
import { useLocalStore } from '@deep-foundation/store/local';
import pickGalleryPhotos from '../pick-photos';
import uploadGallery from '../upload-gallery';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client';

export const useGallery = (deep: DeepClient, containerLinkId: number, options?: GalleryImageOptions) => {
  const [galleryPhotos, setGalleryPhotos] = useLocalStore<GalleryPhoto[]>("GalleryPhotos", []);

  useEffect(() => {
    const upload = async () => {
      await uploadGallery({ deep, containerLinkId, galleryPhotos });
      setGalleryPhotos([]);
    }
    if (galleryPhotos.length > 0) {
      upload();
    }
  }, [galleryPhotos, deep]);

  const pickPhotosFromGallery = async () => {
    const newGalleryPhotos = await pickGalleryPhotos();
    setGalleryPhotos([...galleryPhotos, ...newGalleryPhotos]);
  }

  return pickPhotosFromGallery
};