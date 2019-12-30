#!/bin/sh

for file in *.mp4
	do
    		fileName=`echo ${file} | sed -e "s/\.mp4$//"`
    		ffmpeg -threads 0 -n -i ${fileName}.mp4 -vcodec h264_nvenc -acodec aac -movflags +faststart -flags +loop-global_header -map 0 -max_interleave_delta 0 -vbsf h264_mp4toannexb -max_muxing_queue_size 1024 -f segment -segment_format mpegts -hls_time 10 -segment_list ./hls/${fileName}.m3u8 ./hls/${fileName}_%04d.ts
	done
