export class ClockWidget {
  private static instance: ClockWidget | null = null;

  private constructor() {}

  public static getInstance(): ClockWidget {
      if (ClockWidget.instance === null) {
          ClockWidget.instance = new ClockWidget();
      }
      return ClockWidget.instance;
  }

  public displayTime() {
      const clockTimeElement = document.getElementById('clock-time');
      if (clockTimeElement) {
          const currentTime = new Date().toLocaleTimeString();
          clockTimeElement.textContent = currentTime;
      }
  }
}