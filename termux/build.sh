#!/data/data/com.termux/files/usr/bin/bash

msgholder () {
    times=$(( ( RANDOM % 3 )  + 1 ))
    content=$1
    let "dlStepNow++"
    echo -n $1
    for i in $(seq 1 $times)
    do
        sleep 1
        echo -n "."
    done
    echo ""
}

dlSteps=4
dlStepNow=0
dlMsg="[Step 1] 下載常用套件"

msgholder "${dlMsg} (${dlStepNow}/${dlSteps})"
pkg install python -y
msgholder "${dlMsg} (${dlStepNow}/${dlSteps})"
pip install --upgrade pip
msgholder "${dlMsg} (${dlStepNow}/${dlSteps})"
pip install youtube-dl
msgholder "${dlMsg} (${dlStepNow}/${dlSteps})"
pip install --upgrade youtube-dl

###############################################

envSteps=3
envStepNow=0
envMsg="[Step 2] 設定環境"
username=""
phonename=""

msgholder "${envMsg} (${dlStepNow}/${dlSteps})"

while [ -z $username ]
do
    read -p "請輸入名稱：" username
done

while [ -z $phonename ]
do
    read -p "請輸入手機名稱：" phonename
done

msgholder "${envMsg} (${dlStepNow}/${dlSteps})"
if [ -f ~/.bashrc ]; then
    echo "找到原始 bashrc 設定檔，已更名爲 .bashrc.old"
    mv -f ~/.bashrc ~/.bashrc.old
fi
echo 'export PS1="\n\[\e[01;33m\]${username}\[\e[0m\]\[\e[00;37m\]@\[\e[0m\]\[\e[01;36m\]${phonename}\[\e[0m\]\[\e[00;37m\] \D{%y.%m.%d} \t \[\e[0m\]\[\e[01;35m\]\w\[\e[0m\]\[\e[01;37m\] \[\e[0m\]\n$ "' > ~/.bashrc
printf "%s\n%s\n%s\n" \
'alias p="python"' \
'alias p2="python2"' \
'alias sd=/storage/emulated/0' \
>> ~/.bashrc

msgholder "${envMsg} (${dlStepNow}/${dlSteps})"
. ~/.bashrc


