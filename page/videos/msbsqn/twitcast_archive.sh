#!/bin/bash
# coding: utf-8
# twitcast.sh by dyama

read -p "Please insert twitcasting id > " userid
#if [ -n "$userid" ]; then
  id=$(echo "$userid" | sed 's|^.*/||g')
  fname="${id}_$(date +'%F_%H-%M-%S').ts"
  ffmpeg -i "http://twitcasting.tv/$id/metastream.m3u8/?video=1" -vcodec copy -acodec copy -f mpegts "$fname"
#else
#  echo "usage: $0 twitcasting_account"
#fi
