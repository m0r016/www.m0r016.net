#!/bin/bash
# coding: utf-8
# twitcast.sh by dyama

read -p "Please insert twitcasting archive > " archive
#if [ -n "$userid" ]; then
  id=$(echo "$archive" | sed 's|^.*/||g')
  fname="msbsqn_${archive}.ts"
  ffmpeg -i "http://dl02.twitcasting.tv/msbsqn/download/$archive" -vcodec copy -acodec copy -f mpegts "$fname"
#else
#  echo "usage: $0 twitcasting_account"
#fi
