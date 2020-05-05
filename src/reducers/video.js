import { CHANGE_VIDEO } from '../actions/video';

export default function changeVideo(state = 'jQMW_BVmkyc', action) {
  switch (action.type) {
    case CHANGE_VIDEO:
      return action.video_id;
    default:
      return state;
  }
}