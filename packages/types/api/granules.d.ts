export type GranuleId = string;

export type GranuleStatus = 'completed' | 'failed' | 'running' | 'queued';

export type GranuleTemporalInfo = {
  beginningDateTime: string
  endingDateTime: string
  productionDateTime: string
  lastUpdateDateTime: string
};

export interface MessageGranule { // TODO is this really a *message* granule?
  granuleId: string
  cmrLink?: string
  published?: boolean
  status?: string
  sync_granule_duration?: number
  post_to_cmr_duration?: number
  files?: import('./files').ApiFile[]
  createdAt?: number
}

type OptionalGranuleTemporalInfo = GranuleTemporalInfo | {};
type OptionalGranuleProcessingInfo = import('./executions').ExecutionProcessingTimes | {};

export type ApiGranule = {
  granuleId: string
  collectionId: string
  status: GranuleStatus
  execution?: string | null | undefined
  cmrLink?: string | null | undefined
  published?: boolean | null | undefined
  pdrName?: string | null | undefined
  provider?: string | null | undefined
  error?: Object | null | undefined
  createdAt: number
  timestamp?: number | null | undefined
  updatedAt: number
  duration?: number | null | undefined
  productVolume?: string | null | undefined
  timeToPreprocess?: number | null | undefined
  timeToArchive?: number | null | undefined
  files?: Omit<import('./files').ApiFile, 'granuleId'>[] | null | undefined
  queryFields?: Object | null | undefined
} & OptionalGranuleTemporalInfo & OptionalGranuleProcessingInfo;
