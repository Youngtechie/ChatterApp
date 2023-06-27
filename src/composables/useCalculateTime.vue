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
  } else if (timeDiffInSeconds < 2592000) {
    const daysDiff = Math.floor(timeDiffInSeconds / 86400);
    if(daysDiff === 1){
      return daysDiff + " day ago";
    }
    return daysDiff + " days ago";
  } else {
    const dateTime = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    return dateTime.toLocaleString();
  }
}
</script>