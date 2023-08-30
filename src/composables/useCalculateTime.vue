<script lang="ts">

export default function convertToRelativeTime(timestamp: number): string {
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  
  // Calculate the time difference in seconds
  const timeDiffInSeconds = currentTime - timestamp;

  if (timeDiffInSeconds < 60) {
    return timeDiffInSeconds + " seconds ago";
  } else if (timeDiffInSeconds < 3600) {
    const minutesDiff = Math.floor(timeDiffInSeconds / 60);
    return minutesDiff + " minutes ago";
  } else if (timeDiffInSeconds < 86400) {
    const hoursDiff = Math.floor(timeDiffInSeconds / 3600);
    return hoursDiff + " hours ago";
  } else{
    const daysDiff = Math.floor(timeDiffInSeconds / 86400);
    if(daysDiff === 1){
      return daysDiff + " day ago";
    }
    return daysDiff + " days ago";
  }
}
</script>