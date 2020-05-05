export const CHANGE_VIDEO = 'CHANGE_VIDEO';

export function changeVideo(video_id) {
  return {
    type: CHANGE_VIDEO,
    video_id
  }
}