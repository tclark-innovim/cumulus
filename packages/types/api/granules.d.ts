export type GranuleId = string;

export type GranuleStatus = 'completed' | 'failed' | 'running';

export type GranuleTemporalInfo = {
  beginningDateTime: string
  endingDateTime: string
  productionDateTime: string
  lastUpdateDateTime: string
} | {};

export interface MessageGranule {
  granuleId: string
  cmrLink?: string
  published?: boolean
  status?: string
  sync_granule_duration?: number
  post_to_cmr_duration?: number
  files?: import('./files').ApiFile[]
}

export type ApiGranule = {
  granuleId: string
  collectionId: string
  status: GranuleStatus
  execution?: string
  cmrLink?: string
  published?: boolean
  pdrName?: string
  provider?: string
  error?: Object
  createdAt: number
  timestamp?: number
  updatedAt: number
  duration?: number
  productVolume?: number
  timeToPreprocess?: number
  timeToArchive?: number
  files?: Omit<import('./files').ApiFile, 'granuleId'>[]
} & GranuleTemporalInfo & import('./executions').ExecutionProcessingTimes;