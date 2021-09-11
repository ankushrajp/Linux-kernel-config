Configuring and compiling linux kernel seems like one of the hardest things you'll do until you do it. It is as easy as typing few commands, selecting few things from a menu and you are done.  
You don't need to be a programming wizard or computer science guru or even a linux expert for it.  
But what compiling your own kernel is *time consuming*.  Knowing what options to enable/disable isn't hard, you don't need to understand completely what a particular option does - a general passing idea is usually enough, but requires a lot a time (and enough hairs on your head to pull them out) to
experiment.

For example :

  - You disable "seccomp" system call because you have no idea about it and are unsure about whether you need it or not. You system will boot up fine and run fine until you open an application which requires seccomp call. Then you go back, enable the sys call and compile again. Repeat.

This guide is aimed to reduce that time spent experimenting and frantically searching internet whether the problem you are having with your system is due to some unselected kernel option or something else.

> You should not blindly copy every option as it is as a lot of options here are specific to my needs and computing hardware (though i've tried to make it as general as possible through explanations).

### How this guide is structured - 

I've based the website on how the kernel menuconfig lists options to make it easy to go through menuconfig and this guide at the same time.
Each option is represented in drop-down like format below - 
