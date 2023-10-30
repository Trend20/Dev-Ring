# Contribution Guide to DevRing.

We would ❤️ it if you contributed to the project and helped make DevRing even better. We will make sure that contributing to DevRing is easy, enjoyable, and educational for anyone and everyone. All contributions are welcome, including features, issues, documentation, guides, and more.

## Got a question?

You can ask questions, shoot me an [Email](enockomondi305@gmail.com), and discuss DevRing-related topics.
## Found a bug?

If you find a bug in the source code, you can help us by [submitting an issue](https://github.com/Trend20/Dev-Ring/issues/new) to our GitHub Repository. Even better, you can submit a Pull Request with a fix.

## Missing a feature?

You can request a new feature by [submitting an issue](https://github.com/Trend20/Dev-Ring/issues/new) to our GitHub Repository.

If you'd like to implement a new feature, it's always good to be in touch with us before you invest time and effort, since not all features can be supported.

- For a Major Feature, first open an issue and outline your proposal. This will let us coordinate efforts, prevent duplication of work, and help you craft the change so that it's successfully integrated into the project.
- Small Features can be crafted and directly [submitted as a Pull Request](#submit-pr).

## What do you need to know to help?

If you want to help out with a code contribution, our project uses the following stack:

### Server-side
- [Firebase](https://firebase.google.com/)
- [Jest](https://docs.nestjs.com/fundamentals/testing) (for testing)

### Client-side

- [ReactJS](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/docs)

If you don't feel ready to make a code contribution yet, no problem! You can also check out the [readme here](https://github.com/Trend20/Dev-Ring/blob/main/README.md) to understand how the project works.

# <a name="submit-pr"></a> How do I make a code contribution?

## Open to community

You can check all the issues that are open for community contributions.

## Good first issues

Are you new to open source contribution? Wondering how contributions work in our project? Here's a quick rundown.

Find an issue that you're interested in addressing, or a feature that you'd like to add.

Are you new to open source contribution? Wondering how contributions work in our project? Here's a quick rundown.

```sh
git commit -m "<type>(<package>): <subject>"
```

## Step 8: Push the changes to the remote repository

Push the changes to the remote repository using:

```sh
git push origin branch-name-here
```

## Step 9: Create Pull Request

In GitHub, do the following to submit a pull request to the upstream repository:

1.  Give the pull request a title and a short description of the changes made following the template. Include also the issue or bug number associated with your change. Explain the changes that you made, any issues you think exist with the pull request you made, and any questions you have for the maintainer.  <br/> ⚠️ **Make sure your pull request target the `next` branch.**
 
  > Pull request title should be in the form of `<type>(<package>): <subject>` as per commit messages.
Remember, it's okay if your pull request is not perfect (no pull request ever is). The reviewer will be able to help you fix any problems and improve it!

2.  Wait for the pull request to be reviewed by a maintainer.

3.  Make changes to the pull request if the reviewing maintainer recommends them.

Celebrate your success after your pull request is merged :-)

## Git Commit Messages

We structure our commit messages like this:

```
<type>(<package>): <subject>
```

Example

```
fix(server): missing entity on init
```

### Types:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Changes to the documentation
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Packages:

- **server**
- **client**

[//]: # (- **data-service-gen**)

## Code of conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

[Code of Conduct](https://github.com/Trend20/Dev-Ring/blob/main/CODE_OF_CONDUCT.md)

Our Code of Conduct means that you are responsible for treating everyone on the project with respect and courtesy.

