#!/bin/sh

for file in *.ts
	do
    		fileName=`echo ${file} | sed -e "s/\.ts$//"`
#    		ffmpeg -y -i ${fileName}.ts -threads 0 -vcodec libx264 -acodec aac -movflags +faststart ${fileName}.mp4
#		ffmpeg -y -i ${fileName}.ts -threads 0 -vcodec libx264 -acodec aac -max_muxing_queue_size 1024 ./tmp/${fileName}.mp4 && ffmpeg -threads 0 -ss 5 -i ./tmp/${fileName}.mp4 -max_muxing_queue_size 1024 -vcodec copy -acodec copy ./${fileName}.mp4 && ffmpeg -i ./${fileName}.mp4 -threads 0 -vcodec copy -acodec copy -movflags +faststart -flags +loop-global_header -map 0 -max_interleave_delta 0 -vbsf h264_mp4toannexb -max_muxing_queue_size 1024 -f segment -segment_format mpgets -hls_time 10 -segment_list ./hls/${fileName}.m3u8 ./hls/${fileName}_%04d.ts 
		ffmpeg -y -i ${fileName}.ts -threads 0 -vcodec libx264 -acodec aac -max_muxing_queue_size 1024 /mnt/md0/twitcasting/msbsqn/tmp/${fileName}.mp4
	done
