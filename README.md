[![npm](https://img.shields.io/npm/v/@deep-foundation/capacitor-camera.svg)](https://www.npmjs.com/package/@deep-foundation/capacitor-camera) 
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/capacitor-camera) 
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

Provides links&functions based on [`capacitor-camera`](https://www.npmjs.com/package/capacitor-camera). 

[**Documentation**](https://deep-foundation.github.io/capacitor-camera/) 

[**List of links**](https://deep-foundation.github.io/capacitor-camera/enums/LinkName.html)

## Camera

The [`Camera`] link serves as a container for link structures representing records inside deep.  
You need only one container link per deep instance.

<img src="https://github.com/deep-foundation/capacitor-camera/assets/44348954/27e9cda2-540a-42f9-ae95-7edc92b12ad1" alt= “” width="80%" height="'80%">



## Prerequisitions
- Install this package in your deep by using npm-packager
- Provide permissions to this package

## Usage
1. Import the library into your TypeScript project:

```js
import Camera, { createContainer } from "@deep-foundation/capacitor-camera";
```

2. For mobile apps use getCameraPermissions function to request user action for setting app's camera and gallery permissions.
```js
const CameraPermissions = await getCameraPermissions();
```

3. Create container link of type [`Camera`] to store Camera data:

```js
const containerLinkId = await createContainer(deep)
```

You can also create it manually inside your deepcase client. Open Insert menu, search for and then insert "Camera" type link.

4. Take photos:

Capture a new photo.
```js
const photo = await Camera.takePhoto(options?);
```
Upload the array of captured photos to deep database.
```js 
await Camera.uploadPhotos({ deep, containerLinkId, photos });
// To upload one photo pass it inside an array. [photo]
```

5. Pick photos from gallery:

Pick a new photo.
```js
const galleryPhotos = await Camera.pickGalleryPhotos(options?);
```
Upload the array of picked photos to deep database.
```js 
await Camera.uploadGallery({ deep, containerLinkId, galleryPhotos });
```

5. Download images from deep database:

Download all existing images made by this camera package as an array.
```js
const images = await downloadImages(deep);
```

## React Usage
1. Import CapacitorCamera react component or hooks:

```js
import { WithCapacitorCamera, CapacitorCamera, useCamera, useGallery, usePermissions, useContainer } from "@deep-foundation/capacitor-camera";
```

2. Create CapacitorCamera component instance inside your deep app and pass a DeepClient instance.

```jsx
function Page() {
  return <CapacitorCamera deep={useDeep()} />
}
```

You will see basic ui with all package functionality.

Alternatively you can use WithCapacitorCamera Component like that:
```jsx
<WithCapacitorCamera deep={yourDeepInstance} containerLinkId={yourContainerLinkId}>
    <CapacitorCamera />
</WithCapacitorCamera>
```

3. Custom hooks can be used anywhere in your deep app:

useCamera() hook for taking a new photo with the camera.
Automatically uploads new photos into your deep instance.
```js
const { photos, newPhoto } = useCamera({ deep, containerLinkId });
```

useGallery() hook for picking photos from gallery.
Automatically uploads picked photos into your deep instance.
```js
const { galleryPhotos, pickPhotosFromGallery } = useGallery({ deep, containerLinkId });
```
* **If there is no internet connection photos are stored locally on your device and then will upload as soon as connection reappears.**




useContainer() hook to get existing or create a new container link ID.
```js
const containerLinkId = useContainer(deep);
```

usePermissions() hook to manage camera and gallery permissions on mobile devices.
```js
const { cameraPermissions, getPermissions } = usePermissions();
```

## Contribution

Feel free to contribute. Please fork the repository and submit a pull request for any bugs, improvements, or features.

[`Camera`]: https://deep-foundation.github.io/capacitor-camera/enums/LinkName.html#Camera
