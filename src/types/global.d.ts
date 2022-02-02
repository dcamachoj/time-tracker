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
  name: string;
  title: string;
  timeframes: TimeFrames;
}

interface Employee {
  userName: string;
  displayName: string;
  timeData: TimeData[];
}
