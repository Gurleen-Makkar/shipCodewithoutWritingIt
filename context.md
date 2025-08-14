Talk Title: Ship Code. Without Writing It.
 
Talk Abstract:
What if assigning a Jira ticket was all it took to kick off actual development?
 
In this session, we’ll walk you through how we’re already using agentic workflows and AI-powered tools in production to automate software development. From assigning Jira tickets to generating real code, raising pull requests, and updating the ticket—all with minimal human input—we’ll show you how far automation can really go.
 
You’ll also get a behind-the-scenes look at how we combine CLINE (an open developer agent tool) with our own custom MCPs to turn Jira tasks into real code commits—automatically.
 
This isn’t a demo of what could happen. It’s what’s already happening.
 
We’ll explore:
• What parts of development can truly be automated
• What roles AI agents can safely take over
• Where human decisions still matter
 
Come see how we’re moving from “manual development” to “AI-first engineering”—and maybe rethink how you ship code.
 
Key Takeaways
1. How to design and use AI agents that understand Jira and write code
2. Real-world demo of agentic workflows using CLINE and custom MCPs
3. Why developer workflows are shifting from assistance to automation
4. What to automate, what to control—responsibly using AI in production
5. How AI-first engineering teams are cutting delivery time drastically
 
 
This is topic which i am going to present in test mu conference
 
now i will give you context of what we have already done in the org refer it and if you have any doubts ask that
 
 
So at Piramal Finance, we do have a lot of tech related AI use cases that we have been working on for development, enhancements kind of stuff. One of the core things is using line PLI NE. So this is basically a agent framework that sits inside your VS code as an extension. Over here, this extension is something like cursor, where it has access to complete code base, it can do created files, run terminals, as browser access, it can open up things and then try. Additionally, it has mcps also as a functionality that it can take in. So we do have our own mcpservice that has been created and we have hosted them as remote sse endpoints and in client, there is a functionality to connect to remote mcpservice also. So while doing this, we do have some of the tools that are there like gira, github, then confluence. These are some of the tools we have already built and exposed. Let's say we do have like how cursor has option to give rules, even client has option to give some rules on how workflow should exist. We have some client rule files that can help you basically to understand that client rule file gives instruction on how to handle gira tickets. And client understands that. Let's say this is the scenario. We just give a gira ticket ID in client and ask it to solve this. Now this client rules actually tells the gira ticket ID is given to you. Then you'll have to go to gira, understand, use this particular branch naming convention. What is a branch naming convention? How should a commit message be? So this all context is already given in client rules file and based on the mcps tools available right client actually goes through understands what is there. Is there some PR? Is there some branch already existing? Should I check out? Should I create a branch? What should be the branch name? It should be based out of gira ID or not. And what are the changes? I should analyze the project. I shouldn't get the gira ticket first analyze what is the change that is required? Is it a feature? It is a bug? These type of things are analyzed and then we kind of have a complete workflow already almost automated over here. All we need to review the code and then accept or not. That is mostly what we do. We do also plan phases kind of stuff but this is mostly the ideal thing that we do. This is one of the things only apart from this we do have something called as a software developer agent that is there which is in completely autonomous flow where we have some tool called as N8N. N8N is an open source agenting platform that is there that you can deploy within your organization and this gives you access to quickly configure agents by just dragging and dropping and then creating graph kind of a network where agents can talk to other agents and tools. There are already predefined so much predefined tools that are present over there and in this N8N we actually have Gira as also tool and Gira is not only a tool N8N also has Gira as a trigger point. So when Gira is getting assigned probably to a user called AI, AI right? To a AI user. So the AI model actually picks that up and agent analyzes basically first initially there is something called as a software developer agent. Who analyzes what is that ticket status? What have they given all information that I need to start with? If that is good then we go to the next part. If not we ask questions to the user saying that clarify about these. Once we have enough information we go to next design studio agent. This design studio agent is basically very intelligent enough to it has the context of the complete code base of repositories of how Pyramel's code is configured. It has a good API discoverability repository discoverability kind of thing where now the agent's responsibility is to delegate it to designs to agent and design studio agents responsibility is to create come up with an LLD and if required an HLD and get it back to Gira ticket comments saying that this is what it is. Can you confirm should I proceed or not? Once the user says okay great go ahead. Again n8n picks up from the trigger and then it assigns it to a developer agent who actually does the coding after breaking down the task into multiple paths. So this is one of the workflows of wywa. We also have some RCA agents and everything that we are running through this N18 basically which goes through continuously Grafana logs. Grafana is the tool we have for log and all metrics. If any alerts are raised then it tries to do the RCA for the alerts. These are some things that we have.
 
give html code of slides which are great amazing ui,cool looking with cool content people should say wow seeing. that
 