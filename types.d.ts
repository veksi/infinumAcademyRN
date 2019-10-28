export interface IPosition {
  kIPLocationLatitude: number;
  kIPLocationLongitude: number;
  kIPLocationFloorLevel: number;
  kIPLocationHorizontalAccuracy: number;
}

export interface IHeading {
  kIPHeadingArbitraryNorthDegrees: number;
  kIPHeadingDegrees: number;
  kIPHeadingAccuracy: number;
}

export default class IndoorPositioningPlugin {
  setConfiguration(configurationString: string, success?: (data: any) => void, error?: (error: Error) => void): void;
  start(success?: (data: any) => void, error?: (error: Error) => void): void;
  stop(success?: (data: any) => void, error?: (error: Error) => void): void;
  isRunning(success?: (data: 'true' | 'false') => void): void;
  getError(callback: (error: Error | null) => void): void;
  getHeading(callback: (heading: IHeading | null, error?: (error: Error) => void) => void): void;
  getLocation(callback: (location: IPosition | null, error?: (error: Error) => void) => void): void;
}
