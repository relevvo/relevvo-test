# Relevvo Engineering Test

Hi, Welcome to the problem statement of the Relevvo Engineering Test. Before we start with the actual problem, a few notes on the thinking behind the design of this test for which there are two parts:

1. Programming Problem. This part has a dual purpose:
    a. Knowledge of algorithms and programming.
    b. GitHub dev/PR process during the solving of the presented problem. Please submit multiple PRs and self approve them as you evolve your solution.
2. Debate Question. To showcase the ability to articulate.

But first, I'd like to make clear as to what this test is not. We are interviewing senior people for a startup, not mid level or junior people in a FAANG setup. So,
the things we are lookng for are slightly different:

1. Some communication polish expected of a senior person.
2. In keeping with time pressure in a startup, some brevity and wit along with 1 above.
3. The ability to make quick trade-offs, usually in favour of simplicity and productivity at the expense of perfection but not to the extent that the solution is barely readable or barely scales.
4. The ability to be resourceful. Or here is a trick question: What is the best code ever written?
5. The ability to do TDD and insert intelligent comments and explanations within code. And in the same breath, to use advanced frameworks which might improve the performance and readability of the tests. And some intelligent selection of what is worth testing in the first place.
6. The ability to architect for future 'improvability'.
7. The ability to provide nuanced reasoning of design choices.

This is not a FAANG interview. I am not looking for very advanced architectures or scholarly knowledge of advanced programming paradigms. I don't expect you to remember advanced algorithms learnt in CS courses which you typically do not encounter in regular work. And there won't be any tricks or puzzles.

We are most likely going to work in a remote only setting. So, we are most likely going to need the ability to collaborate across time zones in written form with not-so-many verbal meetings.

And we need to be productive in such a setting and that's something that this test is trying to evaulate.

## Part 1: Programming Problem

1. Pick one of quick sort or merge sort and implement it in a language of your choice.
2. Provide some discussion of time and space complexity. Assume that the input is a list of positive integers.
3. Discuss foolproofing (or lack of it) for the inputs w.r.t. to the environment the code might be running in. Same with error handling.
4. Feel free to use recursive or iterative variations with some discussion of what you would choose in a production setting and some discussion on how language choices affect this decision. And it would be nice if we could enter the territory of prebuilt implementations and their trade offs.
5. Please do write interesting tests which can test over large, generated inputs.

## Part 2: Debate Question

Assume that I am a senior person who is slightly hostile to others who do not to agree with my biases. But I do know my computer science, so hand wavy arguments or using authority will not work.

You've chosen Python as your programming language choice and one day I confront you with the dismissive comment: Python is a slow language. It is not even a real programming language. Golang is so much better. It is compiled and executes much faster. Let's switch over.

This is a fun question, and please treat it as such.

Without being disresepctul or adversarial, please defend your choice. Try and frame it as an optimisation rather than a right v/s wrong choice. And feel free to point to real life examples and online commentary to illustrate that.

Present a short written answer for this and prepare some thoughts for a verbal discussion.

**YOU CAN ADD YOUR WRITTEN DISCUSSIONS BELOW IN THIS README**

This is a fun question. I would approach it from a few directions. First, I would avoid that discussion in a one on one capacity and instead focus on allowing it to come up in group discussions where there is a natural tendency to move towards group consensus rather than one persons opinion vs another's. I would also phrase my discussion with leading questions rather than assertions. 

When the topic does come up, I would immediately accept the claim that Go can be far faster when focused on CPU bound tasks. Though things like goroutines make it good at evented applications, python and node both do well there too. If the needs of the app were profiled and found to have large portions of CPU bound life, the person might have a point. I would raise no objection to the topic of language coming up in a group setting. :-) Though in that discussion, I would likely introduce the JVM as a high performance alternative with a much larger recruitable developer community. 

With the speed topic out of the way, I would then move on to a discussion of the other reasons to pick a language. My thoughts would be that our goals involve likely application of machine learning. In practice Java and Python appear to be the main languages of ML and python the bigger of the two. If we assume that we already are forced to have JavaScript on the frontend, and Python on the ML side, I would ask if we see a big value from requiring a third in house language when many companies with large traffic loads run on JS and Python. Though the community and available libraries in the Go ecosystem are growing, python still has a more rich set of libraries available. The best code might be well supported third party code that already exists. 

My next thought would be that the ease of hiring and onboarding new developers is a benefit of a language. To my knowledge Go - like Rust - was envisioned to be a lower level language well suited for high performance near systems level tasks. Python is a mature 30 year old language with vibrant communities in ML and several other domains. I would ask if we see more of our coding going to core performance critical processing or to building resource APIs that both Flask and Django do well. Additionally for the ML portion - if we train on our own hardware - the workload is handled on the GPU and the language used is just a binding, so the performance differences are basically non existant. 