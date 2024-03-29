import { useState, useEffect } from "react";
import { Stack, Card, CardHeader, Heading, CardBody, Text, Button } from "@chakra-ui/react";
import { DeepClient } from "@deep-foundation/deeplinks/imports/client.js";
import { useCamera } from '../hooks/use-camera.js';
import { useGallery } from '../hooks/use-gallery.js';
import { downloadImages } from '../download-images.js';
import { isIOS, isAndroid } from "react-device-detect";
import { ImageCard } from "./image-card.js";
import { useContainer } from "../hooks/use-container.js";
import { usePermissions } from "../hooks/use-permissions.js";

/**
 * React component for using the camera.
 * @param {DeepClient} deep - The DeepClient object instance.
 */
export function CapacitorCamera({ deep, containerLinkId: passedContainerLinkId }: { deep: DeepClient; containerLinkId?: number }) {
  const [images, setImages] = useState<any[]>([]);// State variable for storing images downloaded from deep database.

  const containerLinkIdFromHook = useContainer(deep); // Retrieve the container link ID.
  const [containerLinkId, setContainerLinkId] = useState<number>(passedContainerLinkId || containerLinkIdFromHook);

  useEffect(() => {
    setContainerLinkId(passedContainerLinkId || containerLinkIdFromHook);
  }, [deep, passedContainerLinkId, containerLinkIdFromHook]);

  const { cameraPermissions, getPermissions } = usePermissions(); // Get camera permissions.
  const { galleryPhotos, pickPhotosFromGallery } = useGallery({ deep, containerLinkId }); // Custom hook for using the gallery.
  const { photos, newPhoto } = useCamera({ deep, containerLinkId }); // Custom hook for taking a new photo with the camera.

  return (
    <>
      <Stack>
        <Card align={"center"}>
          <CardHeader>
            <Heading>
              CAMERA
            </Heading>
          </CardHeader>
          {!(isAndroid && isIOS)
            ? null
            : (
              <>
                <CardHeader>
                  <Heading>
                    Permissions
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Stack align={"center"} spacing={4}>
                    <Text>{`Camera Permissions are ${!cameraPermissions?.camera ? 'not' : ''} granted.`}</Text>
                    <Text>{`Gallery Permissions are ${!cameraPermissions?.photos ? 'not' : ''} granted.`}</Text>
                    <Button onClick={async () => await getPermissions()}>
                      REQUEST PERMISSIONS
                    </Button>
                  </Stack>
                </CardBody>
              </>
            )
          }
        </Card>
        <Button onClick={newPhoto}>
          <Text>USE CAMERA</Text>
        </Button>
        <Button onClick={pickPhotosFromGallery}>
          <Text>USE GALLERY</Text>
        </Button>
        <Button onClick={async () => { const images = await downloadImages(deep); setImages(images) }}>
          <Text>LOAD IMAGES</Text>
        </Button>
      </Stack>
      <Stack align="center" direction="column">
        {images?.map((image) => <ImageCard key={image.id} image={image} />)}
      </Stack>
    </>
  );
}