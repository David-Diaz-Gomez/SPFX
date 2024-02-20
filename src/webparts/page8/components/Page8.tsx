import * as React from 'react';
import styles from './Page8.module.scss';
import type { IPage8Props } from './IPage8Props';


export default class Page8 extends React.Component<IPage8Props, { showModal: boolean; modalImages: string[]; currentImageIndex: number; showPausasActivasModal: boolean; focusedIndex: number | null; modalTab: 'pausas' | 'ejercicios'; imagesActivities: string[]; currentImageIndexActividades: number; showPildorasModal: boolean }> {
  constructor(props: IPage8Props) {
    super(props);
    this.state = {
      showModal: false,
      modalImages: [],
      currentImageIndex: 0,
      showPausasActivasModal: false,
      showPildorasModal: false,
      focusedIndex: null,
      modalTab: 'pausas',
      imagesActivities: [
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/f56b0005-3b19-4d00-8db3-78261227a56f/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/0cb7cf7a-695a-4bfb-9a2c-4cfbdb251cef/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/4bc24977-8697-400e-b617-3181af5a061a/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/40c75531-0652-42e7-975e-cd674db4466b/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/b5281525-2be7-4b86-b6da-cf7e24fde603/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/ccd65bcb-c165-4c18-bec0-db2798c2b289/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/61d53a21-1985-4946-8f31-fb429bf1be7e/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/9f888d54-99b8-4c5a-bdb8-b2f7837749d4/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/3c969a85-899b-4c6a-a791-cf195f5e8db8/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/2fa4e591-1f4f-434d-a341-08e195eb00b7/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/1d0c091e-2b85-4ff8-ba99-d0f6be5c7a42/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/44382a4f-f722-4f0f-8e7d-558a197ee1ee/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/44120e06-5d7d-4408-a0ed-4c484f6d66b0/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/828bea7a-7786-4d65-8e2f-93b2fc1d1222/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/73fea8ef-97e7-4f62-97d7-4d0e86f99b2a/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/41b42349-04e8-49bb-be20-c17ee71433f7/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/d4258e42-cda4-43fd-8555-f51f2ea7a599/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/cd75562e-d151-41a8-ac6f-939b14f723cb/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/97a99f41-ea94-4a12-8a42-3e818a16bfe0/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/d081d401-cb94-4937-bb6d-c9300b659e85/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/518728b9-34bc-4448-a7ec-58934673f4e0/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/6e792c47-5d7d-473a-b19d-61905f4d3da1/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/7ae789b9-dd5f-4ead-b9a9-b72f488b4775/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/4e507d3b-1cfc-42e6-8fdd-d8ad1d4608ed/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/43e6bef8-a5db-4c0f-b444-4ef6dd19faee/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/0d3dd4ad-ad7b-4195-8fec-439c0f633497/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/f1ca4139-c55a-45a0-aba0-038392fc7377/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/bdbb976d-bfdf-4e13-8760-6c2cbbb9cf05/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/310520f6-0021-4329-8cae-81e25e571955/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/d9a3e091-8520-46f0-b5d9-10637af0e5f7/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/9e30e161-c50b-4b0c-9987-d5732bd9d266/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/afed4754-8022-4274-8a8f-9f95a0891c64/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/1c708e46-98fb-4948-b338-09297af37741/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/9f53081d-d5a2-4bd0-8544-58c9c7a9fac0/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/af678ff4-8ed6-4008-874c-31acd1d7cf46/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/f785a8ef-8aa7-491d-afe2-fde76d27e020/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/65c1fd1c-49b5-4377-9850-e3b3facde399/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/961fd9e7-17f6-4d1e-910e-ecbeef24942e/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/bfcb9d49-6739-4efc-91cb-8a223c5e06a2/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/9734652c-124a-494b-81f9-3df86c22b1ea/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/58fa5e6a-2a71-4a7f-b603-140510555adc/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/4ab488dc-53e3-42a8-a481-e0447c1ab913/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/c714ff06-c507-4a77-aa54-a7a9364ae221/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/2de24eb4-9edd-4f6a-a4ac-d5281deb4783/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart",
        "https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/fead7498-5a95-4378-a404-5015019b3a85/driveItem/thumbnails/0/c960x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart"
      ],
      currentImageIndexActividades: 0,


    };
  }

  handleModalTabClick = (tab: 'pausas' | 'ejercicios') => {
    this.setState({ modalTab: tab });
  };

  openModal = (images: string[]): void => {
    this.setState({ showModal: true, modalImages: images });
  }

  closeModal = (): void => {
    this.setState({ showModal: false, modalImages: [] });
  }

  openPausasActivasModal = () => {
    this.setState({ showPausasActivasModal: true });
  }

  closePausasActivasModal = () => {
    this.setState({ showPausasActivasModal: false });
  }

  closeModalPildoras = () => {
    this.setState({ showPildorasModal: false });
  }
  openModalPildoras = () => {
    this.setState({ showPildorasModal: true });
  }
  navigateImages = (direction: 'prev' | 'next', event: React.MouseEvent<HTMLButtonElement>) => {

    event.stopPropagation();
    console.log(this.state.modalImages)
    const { modalImages, currentImageIndex } = this.state;
    const totalImages = modalImages.length;

    if (direction === 'prev') {
      this.setState({
        currentImageIndex: (currentImageIndex - 1 + totalImages) % totalImages,
      });
    } else if (direction === 'next') {
      this.setState({
        currentImageIndex: (currentImageIndex + 1) % totalImages,
      });
    }
  };

  navigateImagenesActividades = (direction: 'prev' | 'next', event: React.MouseEvent<HTMLButtonElement>) => {

    const { imagesActivities, currentImageIndexActividades } = this.state;
    const totalImages = imagesActivities.length;

    if (direction === 'prev') {
      this.setState({
        currentImageIndexActividades: (currentImageIndexActividades - 1 + totalImages) % totalImages,
      });
    } else if (direction === 'next') {
      this.setState({
        currentImageIndexActividades: (currentImageIndexActividades + 1) % totalImages,
      });
    }
  }


  renderIframeContent(index: number): React.ReactNode {
    // Asume que este método devolverá el contenido del iframe según el índice proporcionado.
    // Adaptar según tus necesidades.
    switch (index) {
      case 0:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FPausasActivas%2FEjercicio%20para%20pausa%20activa2%2Emp4" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 1:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FPausasActivas%2FEjercicio%20para%20pausa%20activa%2Emp4" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 2:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FPausasActivas%2FEjercicio%20para%20pausa%20activa3%2Emp4" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 3:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FPausasActivas%2FEjercicio%20para%20pausa%20activa4%2Emp4" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 4:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FPausasActivas%2FEjercicio%20para%20pausa%20activa5%2Emp4" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 5:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FPausasActivas%2FEjercicio%20para%20pausa%20activa6%2Emp4&nav=eyJwbGF5YmFja09wdGlvbnMiOnsic3RhcnRUaW1lSW5TZWNvbmRzIjoyNC41NDM0OTJ9fQ%3D%3D&referrer=SharePointFileViewer%2EWeb&referrerScenario=PopOut%2Emis%2E65c35079%2Db8f3%2D4530%2Daa65%2D2482c5654e09" style={{ width: '100%', height: '100%', border: 'none' }} />;
      // Añadir más casos según sea necesario
      default:
        return null;
    }
  }

  handleFocusChange = (index: number | null) => {
    this.setState({ focusedIndex: index });
  };

  public render(): React.ReactElement<IPage8Props> {
    const { showModal, modalImages, currentImageIndex, showPausasActivasModal, focusedIndex, modalTab, imagesActivities, currentImageIndexActividades, showPildorasModal } = this.state;
    return (
      <section>
        {/* Imagen */}
        <img
          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1701959696568.jpeg"
          alt="Imagen"
          style={{ height: '25vh', width: '100%', objectFit: 'fill' }}
        />

        {/* Párrafo */}
        <p style={{ margin: '1% 5% 1% 5%', fontSize: '.7rem' }}>
          Nuestro propósito fundamental es proteger la salud, seguridad y bienestar físico, mental y social de los colaboradores en las instalaciones de la compañía; promoviendo y manteniendo ambientes de trabajo saludables y sostenibles, identificando y evaluando los riesgos relacionados con la actividad realizada y fomentando hábitos de vida saludables, programas de salud y bienestar y generando espacios de formación y capacitación.
        </p>


        <div className={styles.contentNavegacionObjectivos}>
          <div className={styles.barraNavegación} >
            <button className={styles.navegationButton} onClick={this.openPausasActivasModal}>Pausas activas</button>
            <button className={styles.navegationButton} onClick={() => this.openModal(['https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_732/1692247926893.jpg', 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_733/1692247997403.jpg'])} >Riesgos y accidentes de trabajo</button>
            <button className={styles.navegationButton} onClick={() => this.openModal(['https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_734/1692248160818.jpg', 'https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/Seguridad%20y%20salud%20en%20el%20trabajo/Comités%20de%20Esri%20NOSA/Comite%20de%20Convivencia%20Laboral%20-%20inf.jpg', 'https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/Seguridad%20y%20salud%20en%20el%20trabajo/Comités%20de%20Esri%20NOSA/COPASST.jpg'])}>Comités de Esri NOSA</button>
            <button className={styles.navegationButton} onClick={this.openModalPildoras}>Capsulas de bienestar</button>
          </div>
          {/* Primera división */}
          <div className={styles.objectivos}>
            <h2 style={{ color: '#000080', fontWeight: '600' }}>Objetivos</h2>
            <ul style={{ fontSize: '1.rem', marginRight: '5%' }}>
              <li>Conocer las generalidades del SG-SST</li>
              <li>Actualizar y reforzar en los colaboradores temas relevantes y relacionados con SST</li>
              <li>Fortalecer los conocimientos para identificación de peligros y control de riesgos, prevención AT, EL</li>
            </ul>
          </div>
        </div>

        {/* Div con imagen y título */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '11vh', backgroundColor: 'rgba(0, 0, 0, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ color: 'white', textTransform: 'uppercase' }}>DERECHOS Y DEBERES</h2>
          </div>
          <img
            src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1693843795742.jpeg"
            alt="Imagen Derechos y Deberes"
            style={{ width: '100%', height: '11vh', objectFit: 'cover' }}
          />
        </div>

        {/* Contenedor con tres columnas y listas */}
        <div style={{ display: 'flex', flexDirection: 'row', height: 'auto' }}>
          {/* Columna 1 */}
          <div style={{ flex: 1, padding: '1rem' }}>
            <ul style={{ fontSize: '0.8rem', margin: 0 }}>
              <li>Procurar el cuidado integral de su salud.</li>
              <li>Suministrar información clara, veraz y completa sobre su estado de salud.</li>
              <li>Cumplir las normas de seguridad e higiene propias de la empresa.</li>
              <li>Participar en la prevención de los riesgos profesionales mediante las actividades que determinen de manera conjunta la empresa y la ARL.</li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div style={{ flex: 1, padding: '1rem' }}>
            <ul style={{ fontSize: '0.8rem', margin: 0 }}>
              <li>El derecho a un proceso de inducción y de entrenamiento en seguridad.</li>
              <li>Garantía de la salud y la seguridad.</li>
              <li>La inducción y el entrenamiento de una persona que ingresa a una empresa o que es cambiada de puesto de trabajo debe ser integral.</li>
              <li>Conocer las normas de seguridad es una condición necesaria para el desarrollo de la ocupación del trabajador y en consecuencia, el logro de buenos resultados para la empresa.</li>
              <li>Conocer claramente nuestro oficio y estar capacitado para hacerlo.</li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div style={{ flex: 1, padding: '1rem' }}>
            <ul style={{ fontSize: '0.8rem', margin: 0 }}>
              <li>Implementar y mantener SG-SST.</li>
              <li>Reportar e investigar los accidentes e incidentes de trabajo.</li>
              <li>Realizar actividades de promoción y prevención.</li>
              <li>Velar por el bienestar y salud de los colaboradores en sus áreas de trabajo.</li>
              <li>Identificar, evaluar y valorar riesgos y peligros y establecer.</li>
            </ul>
          </div>
        </div>

        <div style={{ height: '50vh', width: '40%', border: 'none', display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>
          <iframe src="https://esricolombia.sharepoint.com/Areas/GH_2/_layouts/15/embed.aspx?UniqueId=bcde9628-616c-4835-aa6e-80a32e6ad7f2" width="640" height="360" scrolling="no" title="certificacion autoevaculación estandares 2023_02022024.pdf"></iframe>
        </div>

        {showPausasActivasModal && (
          <div className={styles.pausasActivasModalOverlay}>
            <div className={styles.pausasActivasModalContent}>
              <div className={styles.modalTabs}>
                <div
                  className={`${styles.modalTab} ${modalTab === 'pausas' ? styles.activeTab : ''}`}
                  onClick={() => this.handleModalTabClick('pausas')}
                >
                  Pausas
                </div>
                <div
                  className={`${styles.modalTab} ${modalTab === 'ejercicios' ? styles.activeTab : ''}`}
                  onClick={() => this.handleModalTabClick('ejercicios')}
                >
                  Ejercicios
                </div>
              </div>
              <button className={styles.closeButton} onClick={this.closePausasActivasModal}>&times;</button>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {modalTab === 'pausas' ? (
                  <div style={{ width: '100%', height: '100%' }}>
                    <img title="" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_611/1692200405315.png"
                      alt=""
                      style={{ display: 'block', objectFit: 'fill', objectPosition: '50% 50%', height: '100%', width: '100%' }} />
                  </div>) : (
                  <div style={{ width: '100%', height: '100%' }}>

                    {/* Contenido del modal de "Pausas activas" */}
                    <div className={styles.modalRow}>
                      {/* Primer div */}
                      <div className={styles.modalColumn} onMouseEnter={() => this.handleFocusChange(0)}
                        onMouseLeave={() => this.handleFocusChange(null)}>
                        {focusedIndex === 0 ? (
                          this.renderIframeContent(0)
                        ) : (
                          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <div className={styles.imageContainer}>
                              {/* Contenido de la imagen */}
                              <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1692246906296.jpeg' alt="Imagen" className={styles.modalImage} />
                            </div>
                            <div className={styles.blankContainer} style={{ background: '#004675' }}>
                              <div className={styles.flexibilityText}><p>FLEXIBILIDAD DE TRICEPS</p></div>
                              <div className={styles.curva}><strong style={{ color: 'var(--light-200)', fontSize: '20px', fontWeight: '400' }}><em style={{ color: 'white' }}>Ejercicios de brazos y hombros</em></strong></div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className={styles.modalColumn} onMouseEnter={() => this.handleFocusChange(1)}
                        onMouseLeave={() => this.handleFocusChange(null)}>
                        {focusedIndex === 1 ? (
                          this.renderIframeContent(1)
                        ) : (
                          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <div className={styles.imageContainer}>
                              {/* Contenido de la imagen */}
                              <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1692246913963.jpeg' alt="Imagen" className={styles.modalImage} />
                            </div>
                            <div className={styles.blankContainer} style={{ background: '#004675' }}>
                              <div className={styles.flexibilityText}><p>FLEXIÓN DE TOBILLOS</p></div>
                              <div className={styles.curva}><strong style={{ color: 'var(--light-200)', fontSize: '20px', fontWeight: '400' }}><em style={{ color: 'white' }}>Ejercicio de piernas</em></strong></div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className={styles.modalColumn} onMouseEnter={() => this.handleFocusChange(2)}
                        onMouseLeave={() => this.handleFocusChange(null)}>
                        {focusedIndex === 2 ? (
                          this.renderIframeContent(2)
                        ) : (
                          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <div className={styles.imageContainer}>
                              {/* Contenido de la imagen */}
                              <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1692246925131.jpeg' alt="Imagen" className={styles.modalImage} />
                            </div>
                            <div className={styles.blankContainer} style={{ background: '#004675' }}>
                              <div className={styles.flexibilityText}><p>SEMICÍRCULO DE CUELLO</p></div>
                              <div className={styles.curva}><strong style={{ color: 'var(--light-200)', fontSize: '20px', fontWeight: '400' }}><em style={{ color: 'white' }}>Ejercicios de cuello y hombros</em></strong></div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* ... Repite esto para los demás divs */}
                    </div>
                    <div className={styles.modalRow}>
                      <div className={styles.modalColumn} onMouseEnter={() => this.handleFocusChange(3)}
                        onMouseLeave={() => this.handleFocusChange(null)}>
                        {focusedIndex === 3 ? (
                          this.renderIframeContent(3)
                        ) : (
                          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <div className={styles.imageContainer}>
                              {/* Contenido de la imagen */}
                              <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1692246929500.jpeg' alt="Imagen" className={styles.modalImage} />
                            </div>
                            <div className={styles.blankContainer} style={{ background: '#2b7434' }}>
                              <div className={styles.flexibilityText}><p>EXTENSIÓN DE HOMBRO</p></div>
                              <div className={styles.curva}><strong style={{ color: 'var(--light-200)', fontSize: '20px', fontWeight: '400' }}><em style={{ color: 'white' }}>Ejercicios de brazos y hombros</em></strong></div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className={styles.modalColumn} onMouseEnter={() => this.handleFocusChange(4)}
                        onMouseLeave={() => this.handleFocusChange(null)}>
                        {focusedIndex === 4 ? (
                          this.renderIframeContent(4)
                        ) : (
                          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <div className={styles.imageContainer}>
                              {/* Contenido de la imagen */}
                              <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1692246936616.jpeg' alt="Imagen" className={styles.modalImage} />
                            </div>
                            <div className={styles.blankContainer} style={{ background: '#2b7434' }}>
                              <div className={styles.flexibilityText}><p>EXTENSIÓN DE HOMBROS Y BICEPS</p></div>
                              <div className={styles.curva}><strong style={{ color: 'var(--light-200)', fontSize: '20px', fontWeight: '400' }}><em style={{ color: 'white' }}>Ejercicios de brazos y hombros</em></strong></div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className={styles.modalColumn} onMouseEnter={() => this.handleFocusChange(5)}
                        onMouseLeave={() => this.handleFocusChange(null)}>
                        {focusedIndex === 5 ? (
                          this.renderIframeContent(5)
                        ) : (
                          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <div className={styles.imageContainer}>
                              {/* Contenido de la imagen */}
                              <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1692246941402.jpeg' alt="Imagen" className={styles.modalImage} />
                            </div>
                            <div className={styles.blankContainer} style={{ background: '#2b7434' }}>
                              <div className={styles.flexibilityText}><p>EXTENSIÓN DE HOMBROS Y PECTORAL</p></div>
                              <div className={styles.curva}><strong style={{ color: 'var(--light-200)', fontSize: '20px', fontWeight: '400' }}><em style={{ color: 'white' }}>Ejercicios de brazos y hombros</em></strong></div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* ... Repite esto para los demás divs */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {showModal && (
          <div className={styles.modalOverlay} onClick={this.closeModal}>
            <div className={styles.modalContent}>
              <button className={styles.closeButton} onClick={this.closeModal}>&times;</button>
              <div className={styles.modalSlider}>
                <button className={styles.sliderButton} onClick={(e) => this.navigateImages('prev', e)}>&lt;</button>
                <img
                  className={styles.modalImage}
                  src={modalImages[currentImageIndex]}
                  alt={`Slide ${currentImageIndex + 1}`}
                />
                <button className={styles.slideButton} onClick={(e) => this.navigateImages('next', e)}>&gt;</button>
              </div>
            </div>
          </div>
        )}

        {showPildorasModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.contentModalPildoras}>
              <h1 className={styles.titlePildoras}>Capsulas de bienestar</h1>
              <h2 className={styles.subtitlePildoras}>bienestar emocional</h2>
              <div className={styles.contentPildoras}>
                <iframe src="https://esricolombia.sharepoint.com/Areas/GH_2/_layouts/15/embed.aspx?UniqueId=84362ab0-c719-4f15-a942-f6d365a8016a" width="640" height="360" scrolling="no" title="PAP.pdf"></iframe>
                <iframe src="https://esricolombia.sharepoint.com/Areas/GH_2/_layouts/15/embed.aspx?UniqueId=c57e7c37-7172-4594-8579-5fab205fefaa" width="640" height="360" scrolling="no" title="Manejo de duelo en el entorno laboral.pdf"></iframe>
                <iframe src="https://esricolombia.sharepoint.com/Areas/GH_2/_layouts/15/embed.aspx?UniqueId=a0858c87-7cef-40f7-ac3b-6b03adfe0039" width="640" height="360" scrolling="no" title="Gestión Emocional.pdf"></iframe>
                <iframe src="https://esricolombia.sharepoint.com/Areas/GH_2/_layouts/15/embed.aspx?UniqueId=1cafcd42-9050-4ae2-ab74-7498684c19ce" width="640" height="360" scrolling="no" title="Estrés Agudo.pdf"></iframe>
                <iframe src="https://esricolombia.sharepoint.com/Areas/GH_2/_layouts/15/embed.aspx?UniqueId=e0604d90-bdb9-49bb-a911-46fe03496e4e" width="640" height="360" scrolling="no" title="Bornout.pdf"></iframe>
              </div>
              <button onClick={this.closeModalPildoras}></button>
            </div>
          </div>
        )
        }

        {/* contenido de powerpoint y galeria de imagenes de actividades */}
        <section className={styles.contentPowerGaleria}>
          <hr className={styles.hr} />
          <div className={styles.contentPower}>
            <h2 className={styles.titlePower}>Podrás encontrar en la presentación la totalidad del sistema de gestión de seguridad y salud en el trabajo.</h2>
            <iframe className={styles.powerPoint} src="https://esricolombia.sharepoint.com/Areas/GH_2/_layouts/15/Doc.aspx?sourcedoc={3995cf1b-93c5-4c76-8083-03c702d12893}&amp;action=embedview&amp;wdAr=1.7777777777777777">Esto es un documento de <a target="_blank" href="https://office.com">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
          </div>
          <h2 className={styles.titleActividades}>Galería de imágenes actividades SST</h2>
          <div className={styles.galeriaActividades}>
            <button className={styles.sliderButton} onClick={(e) => this.navigateImagenesActividades('prev', e)}>&lt;</button>
            <img
              className={styles.actividadesImage}
              src={imagesActivities[currentImageIndexActividades]}
              alt={`Slide ${currentImageIndexActividades + 1}`}
            />
            <button className={styles.slideButton} onClick={(e) => this.navigateImagenesActividades('next', e)}>&gt;</button>
          </div>
          <span className={styles.lengthImages}>{currentImageIndexActividades + 1} de {imagesActivities.length}</span>
        </section>
      </section>
    );
  }
}
