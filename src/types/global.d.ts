interface TimeFrame {
  current: number;
  previous: number;
}
interface TimeFrames {
  daily: TimeFrame;
  weekly: TimeFrame;
  monthly: TimeFrame;
}

interface TimeData {
  title: string;
  timeframes: TimeFrames;
}
