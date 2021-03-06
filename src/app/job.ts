export class Job {
  id: number;
  kind: string;
  status: string;
  error: string;
  linkageId: number;
  linkageResultId: number;
  migrationId: number;
  datasetId: number;
  datasetExportKind: string;
  datasetExportId: number;
  startedAt: Date;
  endedAt: Date;
  linkageResult?: any;

  isStopped(): boolean {
    return this.status === "finished" || this.status === "failed";
  }
}
