//
// Copyright © 2024 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import type { Doc, Ref } from '@hcengineering/core'
import {} from '@hcengineering/core'
import { driveId } from '@hcengineering/drive'
import drive from '@hcengineering/drive-resources/src/plugin'
import { type IntlString, type Resource, mergeIds } from '@hcengineering/platform'
import { type AnyComponent, type Location } from '@hcengineering/ui'
import {
  type Action,
  type ActionCategory,
  type ViewAction,
  type Viewlet,
  type ViewletDescriptor
} from '@hcengineering/view'

export default mergeIds(driveId, drive, {
  component: {
    GridView: '' as AnyComponent,
    CreateDrive: '' as AnyComponent,
    DriveSpaceHeader: '' as AnyComponent,
    DriveSpacePresenter: '' as AnyComponent,
    DrivePanel: '' as AnyComponent,
    DrivePresenter: '' as AnyComponent,
    EditFolder: '' as AnyComponent,
    FolderPanel: '' as AnyComponent,
    FolderPresenter: '' as AnyComponent,
    FilePresenter: '' as AnyComponent,
    FileSizePresenter: '' as AnyComponent,
    ResourcePresenter: '' as AnyComponent
  },
  function: {
    DriveLinkProvider: '' as Resource<(doc: Doc, props: Record<string, any>) => Promise<Location>>,
    FolderLinkProvider: '' as Resource<(doc: Doc, props: Record<string, any>) => Promise<Location>>
  },
  viewlet: {
    Grid: '' as Ref<ViewletDescriptor>,
    DriveTable: '' as Ref<Viewlet>,
    FileTable: '' as Ref<Viewlet>,
    FileGrid: '' as Ref<Viewlet>
  },
  category: {
    Drive: '' as Ref<ActionCategory>
  },
  action: {
    CreateChildFolder: '' as Ref<Action>,
    CreateRootFolder: '' as Ref<Action>,
    EditDrive: '' as Ref<Action>,
    DownloadFile: '' as Ref<Action>
  },
  actionImpl: {
    CreateChildFolder: '' as ViewAction,
    CreateRootFolder: '' as ViewAction,
    EditDrive: '' as ViewAction,
    DownloadFile: '' as ViewAction
  },
  string: {
    Name: '' as IntlString,
    Description: '' as IntlString,
    Size: '' as IntlString,
    Type: '' as IntlString,
    Metadata: '' as IntlString,
    LastModified: '' as IntlString,
    Parent: '' as IntlString,
    Path: '' as IntlString,
    Drives: '' as IntlString,
    Download: '' as IntlString
  }
})
