import React, { ReactElement, useState, useEffect } from 'react';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client';
import { 
    useContainer, 
    usePermissions, 
    useGallery, 
    useCamera,
    downloadImages
} from '../main'; 

export type WithCapacitorCameraProps = {
    deep: DeepClient;
    containerLinkId?: number;
    children: ReactElement;
};

export const WithCapacitorCamera: React.FC<WithCapacitorCameraProps> = ({ deep, containerLinkId: passedContainerLinkId, children }) => {
    const containerLinkIdFromHook = useContainer(deep);
    const [containerLinkId, setContainerLinkId] = useState<number>(passedContainerLinkId || containerLinkIdFromHook);
    const [images, setImages] = useState<any[]>([]);

    useEffect(() => {
        setContainerLinkId(passedContainerLinkId || containerLinkIdFromHook);
    }, [deep, passedContainerLinkId, containerLinkIdFromHook]);

    const { cameraPermissions, getPermissions } = usePermissions();
    const { galleryPhotos, pickPhotosFromGallery } = useGallery({ deep, containerLinkId });
    const { photos, newPhoto } = useCamera({ deep, containerLinkId });

    const loadImages = async () => {
        const fetchedImages = await downloadImages(deep);
        setImages(fetchedImages);
    };

    const childWithProps = React.cloneElement(children, {
        cameraPermissions,
        getPermissions,
        galleryPhotos,
        pickPhotosFromGallery,
        photos,
        newPhoto,
        loadImages,
        images,
        containerLinkId
    });

    return childWithProps;
};