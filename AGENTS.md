## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## OpenSpec Workflow

This project uses OpenSpec for spec-driven development. Always follow this cycle:

1. **Explore** — `/opsx:explore` to think through an idea before committing
2. **Propose** — `/opsx:propose <name>` to create proposal + specs + design + tasks
3. **Apply** — `/opsx:apply` to implement from the task list
4. **Archive** — `/opsx:archive` to merge specs and file the change

Key points:
- `openspec/specs/` is the source of truth for system behavior
- `openspec/changes/` holds one folder per in-flight change
- Specs use delta format: ADDED/MODIFIED/REMOVED requirements
- Artifacts: proposal.md → specs/ → design.md → tasks.md (enablers, not gates)
- Always get human approval before `/opsx:apply`

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
