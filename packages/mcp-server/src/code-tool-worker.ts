// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';
import Fuse from 'fuse.js';
import ts from 'typescript';
import { WorkerOutput } from './code-tool-types';
import { ZhipinServer, ClientOptions } from 'zhipin-server';

async function tseval(code: string) {
  return import('data:application/typescript;charset=utf-8;base64,' + Buffer.from(code).toString('base64'));
}

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { ZhipinServer } from "zhipin-server";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: ZhipinServer)`
    : `const run: (${functionSource.client}: ZhipinServer) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: lineNumber } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    const line = codeWithImport.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.v1.seeker.profile.workExperience.delete',
    'client.v1.seeker.profile.workExperience.retrieveWorkExperience',
    'client.v1.seeker.profile.workExperience.update',
    'client.v1.seeker.profile.workExperience.workExperience',
    'client.v1.seeker.profile.projects.create',
    'client.v1.seeker.profile.projects.delete',
    'client.v1.seeker.profile.projects.list',
    'client.v1.seeker.profile.projects.update',
    'client.v1.seeker.profile.jobIntentions.delete',
    'client.v1.seeker.profile.jobIntentions.jobIntentions',
    'client.v1.seeker.profile.jobIntentions.retrieveJobIntentions',
    'client.v1.seeker.profile.jobIntentions.update',
    'client.v1.seeker.profile.education.create',
    'client.v1.seeker.profile.education.delete',
    'client.v1.seeker.profile.education.list',
    'client.v1.seeker.profile.education.update',
    'client.v1.seeker.profile.qualifications.create',
    'client.v1.seeker.profile.qualifications.delete',
    'client.v1.seeker.profile.qualifications.list',
    'client.v1.seeker.preferences.assistantSettings.retrieveAssistantSettings',
    'client.v1.seeker.preferences.assistantSettings.updateAssistantSettings',
    'client.v1.seeker.preferences.commonPhrases.commonPhrases',
    'client.v1.seeker.preferences.commonPhrases.delete',
    'client.v1.seeker.preferences.commonPhrases.retrieveCommonPhrases',
    'client.v1.seeker.preferences.blockedCompanies.blockedCompanies',
    'client.v1.seeker.preferences.blockedCompanies.delete',
    'client.v1.seeker.preferences.blockedCompanies.retrieveBlockedCompanies',
    'client.v1.seeker.message.recall',
    'client.v1.seeker.message.conversations.create',
    'client.v1.seeker.message.conversations.delete',
    'client.v1.seeker.message.conversations.list',
    'client.v1.seeker.message.conversations.read',
    'client.v1.seeker.message.conversations.retrieve',
    'client.v1.seeker.message.conversations.updateMute',
    'client.v1.seeker.message.conversations.updatePin',
    'client.v1.seeker.message.conversations.messages.create',
    'client.v1.seeker.message.conversations.messages.list',
    'client.v1.seeker.account.me.avatar',
    'client.v1.seeker.account.me.create',
    'client.v1.seeker.account.me.list',
    'client.v1.seeker.account.me.patchAll',
    'client.v1.seeker.account.me.updatePassword',
    'client.v1.seeker.notifications.delete',
    'client.v1.seeker.notifications.list',
    'client.v1.seeker.notifications.read',
    'client.v1.seeker.notifications.readAll',
    'client.v1.seeker.notifications.retrieveStats',
    'client.v1.seeker.files.file',
    'client.v1.seeker.files.image',
    'client.v1.seeker.auth.logout',
    'client.v1.seeker.auth.refresh',
    'client.v1.seeker.auth.register',
    'client.v1.seeker.auth.token.refresh',
    'client.v1.seeker.auth.sms.login',
    'client.v1.seeker.auth.sms.send',
    'client.v1.seeker.auth.seekerLogin.create',
    'client.v1.seeker.auth.seekerLogin.sms',
    'client.v1.seeker.applications.create',
    'client.v1.seeker.applications.delete',
    'client.v1.seeker.applications.list',
    'client.v1.seeker.applications.retrieve',
    'client.v1.seeker.applications.retrieveStatistics',
    'client.v1.seeker.applications.updateMarkUnsuitable',
    'client.v1.seeker.aiAssistant.jdOptimize',
    'client.v1.seeker.aiAssistant.retrieveAnalytics',
    'client.v1.seeker.aiAssistant.riskAnalysis',
    'client.v1.seeker.aiAssistant.messages.create',
    'client.v1.seeker.aiAssistant.messages.list',
    'client.v1.seeker.schedules.list',
    'client.v1.seeker.schedules.retrieve',
    'client.v1.seeker.schedules.updateCancel',
    'client.v1.seeker.schedules.updateConfirm',
    'client.v1.seeker.skills.retrieveSuggestions',
    'client.v1.seeker.lookups.regions.provinces.list',
    'client.v1.seeker.lookups.regions.provinces.retrieveCities',
    'client.v1.seeker.lookups.autocomplete.retrieveCompanies',
    'client.v1.seeker.lookups.autocomplete.retrieveMajors',
    'client.v1.seeker.lookups.autocomplete.retrievePositions',
    'client.v1.seeker.lookups.autocomplete.retrieveSchools',
    'client.v1.seeker.jobs.list',
    'client.v1.seeker.jobs.retrieve',
    'client.v1.seeker.jobs.retrieveCategories',
    'client.v1.seeker.jobs.retrieveHot',
    'client.v1.seeker.jobs.retrieveLatest',
    'client.v1.seeker.jobs.retrieveRecommended',
    'client.v1.enterprise.submitFeedback',
    'client.v1.enterprise.schedules.cancel',
    'client.v1.enterprise.schedules.confirm',
    'client.v1.enterprise.schedules.create',
    'client.v1.enterprise.schedules.delete',
    'client.v1.enterprise.schedules.list',
    'client.v1.enterprise.schedules.retrieve',
    'client.v1.enterprise.schedules.submitFeedback',
    'client.v1.enterprise.schedules.update',
    'client.v1.enterprise.resumes.list',
    'client.v1.enterprise.resumes.reject',
    'client.v1.enterprise.resumes.retrieve',
    'client.v1.enterprise.resumes.statistics',
    'client.v1.enterprise.resumes.updateStatus',
    'client.v1.enterprise.quickReplies.create',
    'client.v1.enterprise.quickReplies.delete',
    'client.v1.enterprise.quickReplies.list',
    'client.v1.enterprise.quickReplies.update',
    'client.v1.enterprise.positions.create',
    'client.v1.enterprise.positions.delete',
    'client.v1.enterprise.positions.list',
    'client.v1.enterprise.positions.retrieve',
    'client.v1.enterprise.positions.update',
    'client.v1.enterprise.positions.updateStatus',
    'client.v1.enterprise.message.recall',
    'client.v1.enterprise.message.conversations.create',
    'client.v1.enterprise.message.conversations.delete',
    'client.v1.enterprise.message.conversations.list',
    'client.v1.enterprise.message.conversations.markRead',
    'client.v1.enterprise.message.conversations.mute',
    'client.v1.enterprise.message.conversations.pin',
    'client.v1.enterprise.message.conversations.retrieve',
    'client.v1.enterprise.message.conversations.messages.list',
    'client.v1.enterprise.message.conversations.messages.send',
    'client.v1.enterprise.members.add',
    'client.v1.enterprise.members.disable',
    'client.v1.enterprise.members.enable',
    'client.v1.enterprise.members.list',
    'client.v1.enterprise.members.remove',
    'client.v1.enterprise.members.retrieve',
    'client.v1.enterprise.members.update',
    'client.v1.enterprise.companies.requestAdminTransfer',
    'client.v1.enterprise.companies.requestChange',
    'client.v1.enterprise.companies.current.retrieve',
    'client.v1.enterprise.companies.current.update',
    'client.v1.enterprise.companies.current.uploadBusinessLicense',
    'client.v1.enterprise.companies.current.uploadLogo',
    'client.v1.enterprise.aiAssistant.analyzeResume',
    'client.v1.enterprise.aiAssistant.dashboard',
    'client.v1.enterprise.aiAssistant.generateQuestions',
    'client.v1.enterprise.aiAssistant.positionRecommendations',
    'client.v1.enterprise.aiAssistant.resumeOptimization',
    'client.v1.enterprise.aiAssistant.suggestReply',
    'client.v1.enterprise.aiAssistant.setting.retrieve',
    'client.v1.enterprise.aiAssistant.setting.update',
    'client.v1.enterprise.aiAssistant.messages.list',
    'client.v1.enterprise.aiAssistant.messages.send',
    'client.v1.enterprise.account.me.retrieve',
    'client.v1.enterprise.account.me.update',
    'client.v1.enterprise.account.me.updatePassword',
    'client.v1.enterprise.account.me.updatePatch',
    'client.v1.enterprise.account.me.uploadAvatar',
    'client.v1.enterprise.talents.invite',
    'client.v1.enterprise.talents.list',
    'client.v1.enterprise.talents.listFavorites',
    'client.v1.enterprise.talents.retrieve',
    'client.v1.enterprise.talents.favorite.add',
    'client.v1.enterprise.talents.favorite.remove',
    'client.v1.enterprise.notifications.delete',
    'client.v1.enterprise.notifications.list',
    'client.v1.enterprise.notifications.markAllRead',
    'client.v1.enterprise.notifications.markRead',
    'client.v1.enterprise.notifications.statistics',
    'client.v1.enterprise.files.uploadFile',
    'client.v1.enterprise.files.uploadImage',
    'client.v1.enterprise.auth.enterpriseLogin',
    'client.v1.enterprise.auth.logout',
    'client.v1.enterprise.auth.refresh',
    'client.v1.enterprise.auth.register',
    'client.v1.enterprise.auth.token.refresh',
    'client.v1.enterprise.auth.sms.login',
    'client.v1.enterprise.auth.sms.send',
    'client.v1.enterprise.auth.login.sms',
    'client.admin.listPermissions',
    'client.admin.users.create',
    'client.admin.users.disable',
    'client.admin.users.enable',
    'client.admin.users.getLogs',
    'client.admin.users.list',
    'client.admin.users.resetPassword',
    'client.admin.users.retrieve',
    'client.admin.users.update',
    'client.admin.roles.create',
    'client.admin.roles.delete',
    'client.admin.roles.list',
    'client.admin.roles.retrieve',
    'client.admin.roles.update',
    'client.admin.roles.permissions.retrieve',
    'client.admin.roles.permissions.update',
    'client.admin.config.provinces.create',
    'client.admin.config.provinces.delete',
    'client.admin.config.provinces.list',
    'client.admin.config.provinces.update',
    'client.admin.config.privacyPolicy.retrievePrivacyPolicy',
    'client.admin.config.privacyPolicy.updatePrivacyPolicy',
    'client.admin.config.jobTypes.delete',
    'client.admin.config.jobTypes.update',
    'client.admin.config.jobSubcategories.delete',
    'client.admin.config.jobSubcategories.update',
    'client.admin.config.jobSubcategories.types.create',
    'client.admin.config.jobSubcategories.types.list',
    'client.admin.config.jobCategories.delete',
    'client.admin.config.jobCategories.jobCategories',
    'client.admin.config.jobCategories.retrieveJobCategories',
    'client.admin.config.jobCategories.update',
    'client.admin.config.jobCategories.subcategories.create',
    'client.admin.config.jobCategories.subcategories.list',
    'client.admin.config.display.list',
    'client.admin.config.display.updateFeatures',
    'client.admin.config.display.updateHotPositions',
    'client.admin.config.display.banners.create',
    'client.admin.config.display.banners.upload',
    'client.admin.config.dictionary.delete',
    'client.admin.config.dictionary.deleteBatch',
    'client.admin.config.dictionary.retrieve',
    'client.admin.config.dictionary.retrieveTypes',
    'client.admin.config.dictionary.update',
    'client.admin.config.dictionary.updateStatus',
    'client.admin.config.cities.create',
    'client.admin.config.cities.delete',
    'client.admin.config.cities.list',
    'client.admin.config.cities.update',
    'client.admin.config.banners.create',
    'client.admin.config.banners.list',
    'client.admin.config.banners.upload',
    'client.admin.config.announcements.create',
    'client.admin.config.announcements.delete',
    'client.admin.config.announcements.list',
    'client.admin.config.announcements.retrieve',
    'client.admin.config.announcements.update',
    'client.admin.config.bannedWords.bannedWords',
    'client.admin.config.bannedWords.delete',
    'client.admin.config.bannedWords.retrieveBannedWords',
    'client.admin.auth.adminLogin',
    'client.admin.auth.logout',
    'client.admin.auth.retrieveProfile',
    'client.admin.auth.updatePassword',
    'client.admin.notifications.list',
    'client.admin.notifications.markAllAsRead',
    'client.admin.notifications.markAsRead',
    'client.admin.files.uploadFile',
    'client.admin.files.uploadImage',
    'client.admin.feedbacks.getStatistics',
    'client.admin.feedbacks.list',
    'client.admin.feedbacks.reply',
    'client.admin.feedbacks.retrieve',
    'client.admin.feedbacks.uploadAttachment',
    'client.admin.enterprises.disable',
    'client.admin.enterprises.enable',
    'client.admin.enterprises.list',
    'client.admin.enterprises.retrieve',
    'client.admin.enterprises.changeRequests.approve',
    'client.admin.enterprises.changeRequests.list',
    'client.admin.enterprises.changeRequests.reject',
    'client.admin.enterprises.changeRequests.retrieve',
    'client.admin.enterprises.adminTransferRequests.approve',
    'client.admin.enterprises.adminTransferRequests.list',
    'client.admin.enterprises.adminTransferRequests.reject',
    'client.admin.enterprises.adminTransferRequests.retrieve',
    'client.admin.audit.resumes.approve',
    'client.admin.audit.resumes.list',
    'client.admin.audit.resumes.reject',
    'client.admin.audit.resumes.retrieve',
    'client.admin.audit.jobs.approve',
    'client.admin.audit.jobs.list',
    'client.admin.audit.jobs.reject',
    'client.admin.audit.jobs.retrieve',
    'client.admin.audit.jobs.batch.approve',
    'client.admin.audit.jobs.batch.reject',
    'client.admin.audit.enterprises.approve',
    'client.admin.audit.enterprises.list',
    'client.admin.audit.enterprises.reject',
    'client.admin.audit.enterprises.retrieve',
    'client.admin.audit.enterprises.batch.approve',
    'client.admin.system.notice.list',
    'client.admin.system.notice.listTop',
    'client.admin.system.notice.retrieve',
    'client.admin.system.dictionary.listTypes',
    'client.admin.system.dictionary.retrieve',
    'client.admin.system.config.listAll',
    'client.admin.system.config.listByGroup',
    'client.admin.system.config.retrieve',
    'client.admin.statistics.listTrends',
    'client.admin.statistics.retrieveDistribution',
    'client.admin.statistics.retrieveFunnel',
    'client.admin.statistics.retrieveOverview',
    'client.admin.statistics.retrieveRealtime',
    'client.admin.logs.export',
    'client.admin.logs.list',
    'client.admin.logs.retrieve',
    'client.admin.locations.listNearby',
    'client.admin.locations.search',
    'client.admin.jobseekers.list',
    'client.admin.jobseekers.retrieve',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as { opts: ClientOptions; code: string };

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        is_error: true,
        result: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        is_error: true,
        result: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new ZhipinServer({
    ...opts,
  });

  const log_lines: string[] = [];
  const err_lines: string[] = [];
  const originalConsole = globalThis.console;
  globalThis.console = {
    ...originalConsole,
    log: (...args: unknown[]) => {
      log_lines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      err_lines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    run_ = (await tseval(`${code}\nexport default run;`)).default;
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      is_error: false,
      result,
      log_lines,
      err_lines,
    } satisfies WorkerOutput);
  } catch (e) {
    return Response.json(
      {
        is_error: true,
        result: parseError(code, e),
        log_lines,
        err_lines,
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  } finally {
    globalThis.console = originalConsole;
  }
};

export default { fetch };
