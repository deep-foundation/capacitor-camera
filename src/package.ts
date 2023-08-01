
import {
  Package as BasePackage,
  PackageOptions as BasePackageOptions,
} from '@deep-foundation/deeplinks/imports/package';

/**
Represents a deep package

@remarks
Contains name of the package and all the links as the objects with id method which returns the id of the link.

@example
#### Use name field to get the name of the package
```ts
const package = new Package({deep});
const {name: packageName} = package;
```
#### Use id method to get the id of the link
```ts
const package = new Package({deep});
const cameraTypeLinkId = await package["Camera"].id();
const dependencyTypeLinkId = await package["Dependency"].id();
const photoTypeLinkId = await package["Photo"].id();
const formatTypeLinkId = await package["Format"].id();
const formatstringLinkId = await package["formatstring"].id();
const exifTypeLinkId = await package["Exif"].id();
const exifstringLinkId = await package["exifstring"].id();
const webPathTypeLinkId = await package["WebPath"].id();
const webpathstringLinkId = await package["webpathstring"].id();
const pathTypeLinkId = await package["Path"].id();
const pathstringLinkId = await package["pathstring"].id();
const base64TypeLinkId = await package["Base64"].id();
const base64stringLinkId = await package["base64string"].id();
const timeStampTypeLinkId = await package["TimeStamp"].id();
const timestampstringLinkId = await package["timestampstring"].id();
const photoPermissionsTypeLinkId = await package["PhotoPermissions"].id();
const photopermissionsstringLinkId = await package["photopermissionsstring"].id();
const cameraPermissionsTypeLinkId = await package["CameraPermissions"].id();
const camerapermissionstringLinkId = await package["camerapermissionstring"].id();
```

#### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});
await package.applyMinilinks();
const cameraTypeLinkId = package["Camera"].idLocal();
const dependencyTypeLinkId = package["Dependency"].idLocal();
const photoTypeLinkId = package["Photo"].idLocal();
const formatTypeLinkId = package["Format"].idLocal();
const formatstringLinkId = package["formatstring"].idLocal();
const exifTypeLinkId = package["Exif"].idLocal();
const exifstringLinkId = package["exifstring"].idLocal();
const webPathTypeLinkId = package["WebPath"].idLocal();
const webpathstringLinkId = package["webpathstring"].idLocal();
const pathTypeLinkId = package["Path"].idLocal();
const pathstringLinkId = package["pathstring"].idLocal();
const base64TypeLinkId = package["Base64"].idLocal();
const base64stringLinkId = package["base64string"].idLocal();
const timeStampTypeLinkId = package["TimeStamp"].idLocal();
const timestampstringLinkId = package["timestampstring"].idLocal();
const photoPermissionsTypeLinkId = package["PhotoPermissions"].idLocal();
const photopermissionsstringLinkId = package["photopermissionsstring"].idLocal();
const cameraPermissionsTypeLinkId = package["CameraPermissions"].idLocal();
const camerapermissionstringLinkId = package["camerapermissionstring"].idLocal();
```
#### Use name field to get the name of the link
```ts
const package = new Package({deep});
const camera = package["Camera"].name;
const dependency = package["Dependency"].name;
const photo = package["Photo"].name;
const format = package["Format"].name;
const formatstring = package["formatstring"].name;
const exif = package["Exif"].name;
const exifstring = package["exifstring"].name;
const webPath = package["WebPath"].name;
const webpathstring = package["webpathstring"].name;
const path = package["Path"].name;
const pathstring = package["pathstring"].name;
const base64 = package["Base64"].name;
const base64string = package["base64string"].name;
const timeStamp = package["TimeStamp"].name;
const timestampstring = package["timestampstring"].name;
const photoPermissions = package["PhotoPermissions"].name;
const photopermissionsstring = package["photopermissionsstring"].name;
const cameraPermissions = package["CameraPermissions"].name;
const camerapermissionstring = package["camerapermissionstring"].name;
```
*/
export class Package extends BasePackage {

  constructor(param: PackageOptions) {
    super({
      ...param,
      name: '@deep-foundation/capacitor-camera',
    });
  }


      /**
      @example
      #### Use id method to get the id of the Camera link
      ```ts
      const package = new Package({deep});
      const cameraTypeLinkId = await package["Camera"].id();
      ```
      #### Use localId method to get the local id of the Camera link
      ```ts
      const package = new Package({deep});
      const cameraTypeLinkId = await package["Camera"].localId();
      ```
      #### Use name field to get the name of the Camera link
      ```ts
      const package = new Package({deep});
      const camera = await package["Camera"].name;
      ```
      */
      public "Camera" = this.createEntity("Camera");
      /**
      @example
      #### Use id method to get the id of the Dependency link
      ```ts
      const package = new Package({deep});
      const dependencyTypeLinkId = await package["Dependency"].id();
      ```
      #### Use localId method to get the local id of the Dependency link
      ```ts
      const package = new Package({deep});
      const dependencyTypeLinkId = await package["Dependency"].localId();
      ```
      #### Use name field to get the name of the Dependency link
      ```ts
      const package = new Package({deep});
      const dependency = await package["Dependency"].name;
      ```
      */
      public "Dependency" = this.createEntity("Dependency");
      /**
      @example
      #### Use id method to get the id of the Photo link
      ```ts
      const package = new Package({deep});
      const photoTypeLinkId = await package["Photo"].id();
      ```
      #### Use localId method to get the local id of the Photo link
      ```ts
      const package = new Package({deep});
      const photoTypeLinkId = await package["Photo"].localId();
      ```
      #### Use name field to get the name of the Photo link
      ```ts
      const package = new Package({deep});
      const photo = await package["Photo"].name;
      ```
      */
      public "Photo" = this.createEntity("Photo");
      /**
      @example
      #### Use id method to get the id of the Format link
      ```ts
      const package = new Package({deep});
      const formatTypeLinkId = await package["Format"].id();
      ```
      #### Use localId method to get the local id of the Format link
      ```ts
      const package = new Package({deep});
      const formatTypeLinkId = await package["Format"].localId();
      ```
      #### Use name field to get the name of the Format link
      ```ts
      const package = new Package({deep});
      const format = await package["Format"].name;
      ```
      */
      public "Format" = this.createEntity("Format");
      /**
      @example
      #### Use id method to get the id of the formatstring link
      ```ts
      const package = new Package({deep});
      const formatstringLinkId = await package["formatstring"].id();
      ```
      #### Use localId method to get the local id of the formatstring link
      ```ts
      const package = new Package({deep});
      const formatstringLinkId = await package["formatstring"].localId();
      ```
      #### Use name field to get the name of the formatstring link
      ```ts
      const package = new Package({deep});
      const formatstring = await package["formatstring"].name;
      ```
      */
      public "formatstring" = this.createEntity("formatstring");
      /**
      @example
      #### Use id method to get the id of the Exif link
      ```ts
      const package = new Package({deep});
      const exifTypeLinkId = await package["Exif"].id();
      ```
      #### Use localId method to get the local id of the Exif link
      ```ts
      const package = new Package({deep});
      const exifTypeLinkId = await package["Exif"].localId();
      ```
      #### Use name field to get the name of the Exif link
      ```ts
      const package = new Package({deep});
      const exif = await package["Exif"].name;
      ```
      */
      public "Exif" = this.createEntity("Exif");
      /**
      @example
      #### Use id method to get the id of the exifstring link
      ```ts
      const package = new Package({deep});
      const exifstringLinkId = await package["exifstring"].id();
      ```
      #### Use localId method to get the local id of the exifstring link
      ```ts
      const package = new Package({deep});
      const exifstringLinkId = await package["exifstring"].localId();
      ```
      #### Use name field to get the name of the exifstring link
      ```ts
      const package = new Package({deep});
      const exifstring = await package["exifstring"].name;
      ```
      */
      public "exifstring" = this.createEntity("exifstring");
      /**
      @example
      #### Use id method to get the id of the WebPath link
      ```ts
      const package = new Package({deep});
      const webPathTypeLinkId = await package["WebPath"].id();
      ```
      #### Use localId method to get the local id of the WebPath link
      ```ts
      const package = new Package({deep});
      const webPathTypeLinkId = await package["WebPath"].localId();
      ```
      #### Use name field to get the name of the WebPath link
      ```ts
      const package = new Package({deep});
      const webPath = await package["WebPath"].name;
      ```
      */
      public "WebPath" = this.createEntity("WebPath");
      /**
      @example
      #### Use id method to get the id of the webpathstring link
      ```ts
      const package = new Package({deep});
      const webpathstringLinkId = await package["webpathstring"].id();
      ```
      #### Use localId method to get the local id of the webpathstring link
      ```ts
      const package = new Package({deep});
      const webpathstringLinkId = await package["webpathstring"].localId();
      ```
      #### Use name field to get the name of the webpathstring link
      ```ts
      const package = new Package({deep});
      const webpathstring = await package["webpathstring"].name;
      ```
      */
      public "webpathstring" = this.createEntity("webpathstring");
      /**
      @example
      #### Use id method to get the id of the Path link
      ```ts
      const package = new Package({deep});
      const pathTypeLinkId = await package["Path"].id();
      ```
      #### Use localId method to get the local id of the Path link
      ```ts
      const package = new Package({deep});
      const pathTypeLinkId = await package["Path"].localId();
      ```
      #### Use name field to get the name of the Path link
      ```ts
      const package = new Package({deep});
      const path = await package["Path"].name;
      ```
      */
      public "Path" = this.createEntity("Path");
      /**
      @example
      #### Use id method to get the id of the pathstring link
      ```ts
      const package = new Package({deep});
      const pathstringLinkId = await package["pathstring"].id();
      ```
      #### Use localId method to get the local id of the pathstring link
      ```ts
      const package = new Package({deep});
      const pathstringLinkId = await package["pathstring"].localId();
      ```
      #### Use name field to get the name of the pathstring link
      ```ts
      const package = new Package({deep});
      const pathstring = await package["pathstring"].name;
      ```
      */
      public "pathstring" = this.createEntity("pathstring");
      /**
      @example
      #### Use id method to get the id of the Base64 link
      ```ts
      const package = new Package({deep});
      const base64TypeLinkId = await package["Base64"].id();
      ```
      #### Use localId method to get the local id of the Base64 link
      ```ts
      const package = new Package({deep});
      const base64TypeLinkId = await package["Base64"].localId();
      ```
      #### Use name field to get the name of the Base64 link
      ```ts
      const package = new Package({deep});
      const base64 = await package["Base64"].name;
      ```
      */
      public "Base64" = this.createEntity("Base64");
      /**
      @example
      #### Use id method to get the id of the base64string link
      ```ts
      const package = new Package({deep});
      const base64stringLinkId = await package["base64string"].id();
      ```
      #### Use localId method to get the local id of the base64string link
      ```ts
      const package = new Package({deep});
      const base64stringLinkId = await package["base64string"].localId();
      ```
      #### Use name field to get the name of the base64string link
      ```ts
      const package = new Package({deep});
      const base64string = await package["base64string"].name;
      ```
      */
      public "base64string" = this.createEntity("base64string");
      /**
      @example
      #### Use id method to get the id of the TimeStamp link
      ```ts
      const package = new Package({deep});
      const timeStampTypeLinkId = await package["TimeStamp"].id();
      ```
      #### Use localId method to get the local id of the TimeStamp link
      ```ts
      const package = new Package({deep});
      const timeStampTypeLinkId = await package["TimeStamp"].localId();
      ```
      #### Use name field to get the name of the TimeStamp link
      ```ts
      const package = new Package({deep});
      const timeStamp = await package["TimeStamp"].name;
      ```
      */
      public "TimeStamp" = this.createEntity("TimeStamp");
      /**
      @example
      #### Use id method to get the id of the timestampstring link
      ```ts
      const package = new Package({deep});
      const timestampstringLinkId = await package["timestampstring"].id();
      ```
      #### Use localId method to get the local id of the timestampstring link
      ```ts
      const package = new Package({deep});
      const timestampstringLinkId = await package["timestampstring"].localId();
      ```
      #### Use name field to get the name of the timestampstring link
      ```ts
      const package = new Package({deep});
      const timestampstring = await package["timestampstring"].name;
      ```
      */
      public "timestampstring" = this.createEntity("timestampstring");
      /**
      @example
      #### Use id method to get the id of the PhotoPermissions link
      ```ts
      const package = new Package({deep});
      const photoPermissionsTypeLinkId = await package["PhotoPermissions"].id();
      ```
      #### Use localId method to get the local id of the PhotoPermissions link
      ```ts
      const package = new Package({deep});
      const photoPermissionsTypeLinkId = await package["PhotoPermissions"].localId();
      ```
      #### Use name field to get the name of the PhotoPermissions link
      ```ts
      const package = new Package({deep});
      const photoPermissions = await package["PhotoPermissions"].name;
      ```
      */
      public "PhotoPermissions" = this.createEntity("PhotoPermissions");
      /**
      @example
      #### Use id method to get the id of the photopermissionsstring link
      ```ts
      const package = new Package({deep});
      const photopermissionsstringLinkId = await package["photopermissionsstring"].id();
      ```
      #### Use localId method to get the local id of the photopermissionsstring link
      ```ts
      const package = new Package({deep});
      const photopermissionsstringLinkId = await package["photopermissionsstring"].localId();
      ```
      #### Use name field to get the name of the photopermissionsstring link
      ```ts
      const package = new Package({deep});
      const photopermissionsstring = await package["photopermissionsstring"].name;
      ```
      */
      public "photopermissionsstring" = this.createEntity("photopermissionsstring");
      /**
      @example
      #### Use id method to get the id of the CameraPermissions link
      ```ts
      const package = new Package({deep});
      const cameraPermissionsTypeLinkId = await package["CameraPermissions"].id();
      ```
      #### Use localId method to get the local id of the CameraPermissions link
      ```ts
      const package = new Package({deep});
      const cameraPermissionsTypeLinkId = await package["CameraPermissions"].localId();
      ```
      #### Use name field to get the name of the CameraPermissions link
      ```ts
      const package = new Package({deep});
      const cameraPermissions = await package["CameraPermissions"].name;
      ```
      */
      public "CameraPermissions" = this.createEntity("CameraPermissions");
      /**
      @example
      #### Use id method to get the id of the camerapermissionstring link
      ```ts
      const package = new Package({deep});
      const camerapermissionstringLinkId = await package["camerapermissionstring"].id();
      ```
      #### Use localId method to get the local id of the camerapermissionstring link
      ```ts
      const package = new Package({deep});
      const camerapermissionstringLinkId = await package["camerapermissionstring"].localId();
      ```
      #### Use name field to get the name of the camerapermissionstring link
      ```ts
      const package = new Package({deep});
      const camerapermissionstring = await package["camerapermissionstring"].name;
      ```
      */
      public "camerapermissionstring" = this.createEntity("camerapermissionstring");

}

export type PackageOptions = Omit<BasePackageOptions, 'name'>;
