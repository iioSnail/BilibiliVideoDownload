export default {
  0: {
    label: '已完成',
    value: 'success'
  },
  // 6: {
  //   label: '等待下载中',  // 不止为何不生效，在download.ts的`status: 6,  // 不生效`这行，写2就可以
  //   value: 'active'
  // },
  1: {
    label: '视频下载中',
    value: 'active'
  },
  2: {
    label: '音频下载中',
    value: 'active'
  },
  3: {
    label: '视频合成中',
    value: 'active'
  },
  4: {
    label: '排队中',
    value: 'active'
  },
  5: {
    label: '下载失败',
    value: 'exception'
  }
}
