export interface Time {
  data: Data
}

export interface Data {
  best_day: BestDay
  grand_total: GrandTotal
  range: Range
}

export interface BestDay {
  date: string
  text: string
  total_seconds: number
}

export interface GrandTotal {
  daily_average: number
  daily_average_including_other_language: number
  human_readable_daily_average: string
  human_readable_daily_average_including_other_language: string
  human_readable_total: string
  human_readable_total_including_other_language: string
  total_seconds: number
  total_seconds_including_other_language: number
}

export interface Range {
  days_including_holidays: number
  days_minus_holidays: number
  end: string
  holidays: number
  range: string
  start: string
}
