import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <pre className="mb-4">
        {`
        Hello there , I am ElCapor , a hobbyist developer. I have a passion for software engineering
        and reverse engineering. I have a github account at <a href="https://github.com/ElCapor>https://github.com/ElCapor</a>
        I like to learn new things and I like to share my knowledge with others. My github profile is filled with a lot of repositories
        with over 70% of them unfinished, the reason being is that usually i just want to attempt to replicate
        some system i saw on the internet or just to learn something new. I specialize in "generalization", this means
        that i try to know a bit about everything in computer science , so that i can have multiple point of views on anything
        I see. I'm currently on my last high school year, studying maths and physics , and I'm looking forward to graduate as a cybersecurity
        engineer.

        Programming Languages I can program in:
          - Python (5 years+), Web API with Flask, Desktop Apps, OOP Programming
          - C++ (2 years+), Game Programming (Raylib, GODOT), Reverse Engineering (Writing complex cheats & DLLs), Software Development (Untitled ImGui Framework & QT soon), Networking (ASIO) Full OOP & Learning Metaprogramming
          - C# (3 years+), Desktop Apps (.NET), Game Programming (Unity, Raylib), Networking (RiptideNetworking), OOP & Reflection Programming
          - Javascript (?), Express Web Server , simple front end scripts
          - Java (?), Minecraft plugins, Spring Boot (web server)

        Things I'm interested in learning:
          - Windows Kernel Mode Drivers
          - Nuclear Reactor Physics
          - Lua Internals
          - Malware Analysis
          - Building an OS
          - CMake build system
          - JVM Internals
        
        Languages I know:
          - French (native)
          - English (fluent)
          - German (B1)
          - Arabic (semi-fluent)

        My projects:
          - LuauDebugger (C++, Python, Lua) : An attempt at learning Luau internals and building a toolkit for debugging and reversing luau scripts.
          - FarlightExecutor (Javascript, Lua, C#) : A lua executor for the game Farlight that bypasses all securities.
          - Il2CppInspector-Fork (C#) : A fork of Il2CppInspector that I made that added v29 support and fixed some bugs.
          - Bloxlib (Discontinued)(Python) : A library that allowed to cheat on roblox externally with python, you could make full featured hacks, I wanted to prove that one doesnt need to use complex c++ detected stuff to make a cheat.
          - Granny 3 Mod Menu (C++) : A mod menu for the game granny 3 fully made with C++, as an attempt to learn more about Unity IL2CPP reverse engineering.
          - Popgroups Editor (C#) (3K+ Downloads) : A tool to spawn addon (modded) cars into traffic <a href="https://gta5-mods.com/tools/popgroups-editor">Here</a>

        I barely play any game, maybe just Minecraft from time to time.
        I am also a big fan of open source and I contribute from time to time to some projects.
        `}
      </pre>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
