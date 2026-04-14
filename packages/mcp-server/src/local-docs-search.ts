// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'update',
    endpoint: '/api/v1/seeker/profile/work-experience/{id}',
    httpMethod: 'put',
    summary: '更新工作经历',
    description: '更新指定工作经历',
    stainlessPath: '(resource) v1.seeker.profile.work_experience > (method) update',
    qualified: 'client.v1.seeker.profile.workExperience.update',
    params: [
      'id: number;',
      'company: string;',
      'position: string;',
      'startDate: string;',
      'description?: string;',
      'endDate?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: number; company?: string; createdAt?: string; description?: string; endDate?: string; position?: string; startDate?: string; }; message?: string; }',
    markdown:
      "## update\n\n`client.v1.seeker.profile.workExperience.update(id: number, company: string, position: string, startDate: string, description?: string, endDate?: string): { code?: number; data?: work_experience_response; message?: string; }`\n\n**put** `/api/v1/seeker/profile/work-experience/{id}`\n\n更新指定工作经历\n\n### Parameters\n\n- `id: number`\n\n- `company: string`\n  公司名称\n\n- `position: string`\n  职位\n\n- `startDate: string`\n  开始日期\n\n- `description?: string`\n  工作描述\n\n- `endDate?: string`\n  结束日期\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; company?: string; createdAt?: string; description?: string; endDate?: string; position?: string; startDate?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; company?: string; createdAt?: string; description?: string; endDate?: string; position?: string; startDate?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultWorkExperience = await client.v1.seeker.profile.workExperience.update(0, {\n  company: 'company',\n  position: 'position',\n  startDate: '7321-69',\n});\n\nconsole.log(resultWorkExperience);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/work-experience/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "company": "company",\n          "position": "position",\n          "startDate": "7321-69"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.profile.workExperience.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultWorkExperience = await client.v1.seeker.profile.workExperience.update(0, {\n  company: 'company',\n  position: 'position',\n  startDate: '7321-69',\n});\n\nconsole.log(resultWorkExperience.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/seeker/profile/work-experience/{id}',
    httpMethod: 'delete',
    summary: '删除工作经历',
    description: '删除指定工作经历',
    stainlessPath: '(resource) v1.seeker.profile.work_experience > (method) delete',
    qualified: 'client.v1.seeker.profile.workExperience.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.seeker.profile.workExperience.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/seeker/profile/work-experience/{id}`\n\n删除指定工作经历\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.profile.workExperience.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/work-experience/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.profile.workExperience.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.profile.workExperience.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'retrieve_work_experience',
    endpoint: '/api/v1/seeker/profile/work-experience',
    httpMethod: 'get',
    summary: '获取工作经历列表',
    description: '获取当前求职者的所有工作经历',
    stainlessPath: '(resource) v1.seeker.profile.work_experience > (method) retrieve_work_experience',
    qualified: 'client.v1.seeker.profile.workExperience.retrieveWorkExperience',
    response:
      '{ code?: number; data?: { id?: number; company?: string; createdAt?: string; description?: string; endDate?: string; position?: string; startDate?: string; }[]; message?: string; }',
    markdown:
      "## retrieve_work_experience\n\n`client.v1.seeker.profile.workExperience.retrieveWorkExperience(): { code?: number; data?: work_experience_response[]; message?: string; }`\n\n**get** `/api/v1/seeker/profile/work-experience`\n\n获取当前求职者的所有工作经历\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; company?: string; createdAt?: string; description?: string; endDate?: string; position?: string; startDate?: string; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; company?: string; createdAt?: string; description?: string; endDate?: string; position?: string; startDate?: string; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst response = await client.v1.seeker.profile.workExperience.retrieveWorkExperience();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/work-experience \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.profile.workExperience.retrieveWorkExperience',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.seeker.profile.workExperience.retrieveWorkExperience();\n\nconsole.log(response.code);",
      },
    },
  },
  {
    name: 'work_experience',
    endpoint: '/api/v1/seeker/profile/work-experience',
    httpMethod: 'post',
    summary: '创建工作经历',
    description: '添加新的工作经历',
    stainlessPath: '(resource) v1.seeker.profile.work_experience > (method) work_experience',
    qualified: 'client.v1.seeker.profile.workExperience.workExperience',
    params: [
      'company: string;',
      'position: string;',
      'startDate: string;',
      'description?: string;',
      'endDate?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: number; company?: string; createdAt?: string; description?: string; endDate?: string; position?: string; startDate?: string; }; message?: string; }',
    markdown:
      "## work_experience\n\n`client.v1.seeker.profile.workExperience.workExperience(company: string, position: string, startDate: string, description?: string, endDate?: string): { code?: number; data?: work_experience_response; message?: string; }`\n\n**post** `/api/v1/seeker/profile/work-experience`\n\n添加新的工作经历\n\n### Parameters\n\n- `company: string`\n  公司名称\n\n- `position: string`\n  职位\n\n- `startDate: string`\n  开始日期\n\n- `description?: string`\n  工作描述\n\n- `endDate?: string`\n  结束日期\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; company?: string; createdAt?: string; description?: string; endDate?: string; position?: string; startDate?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; company?: string; createdAt?: string; description?: string; endDate?: string; position?: string; startDate?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultWorkExperience = await client.v1.seeker.profile.workExperience.workExperience({\n  company: 'company',\n  position: 'position',\n  startDate: '7321-69',\n});\n\nconsole.log(resultWorkExperience);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/work-experience \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "company": "company",\n          "position": "position",\n          "startDate": "7321-69"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.profile.workExperience.workExperience',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultWorkExperience = await client.v1.seeker.profile.workExperience.workExperience({\n  company: 'company',\n  position: 'position',\n  startDate: '7321-69',\n});\n\nconsole.log(resultWorkExperience.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/seeker/profile/projects/{id}',
    httpMethod: 'put',
    summary: '更新项目经历',
    description: '更新指定项目经历',
    stainlessPath: '(resource) v1.seeker.profile.projects > (method) update',
    qualified: 'client.v1.seeker.profile.projects.update',
    params: [
      'id: number;',
      'projectName: string;',
      'role: string;',
      'startDate: string;',
      'description?: string;',
      'endDate?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: number; createdAt?: string; description?: string; endDate?: string; projectName?: string; role?: string; startDate?: string; }; message?: string; }',
    markdown:
      "## update\n\n`client.v1.seeker.profile.projects.update(id: number, projectName: string, role: string, startDate: string, description?: string, endDate?: string): { code?: number; data?: project_experience_response; message?: string; }`\n\n**put** `/api/v1/seeker/profile/projects/{id}`\n\n更新指定项目经历\n\n### Parameters\n\n- `id: number`\n\n- `projectName: string`\n  项目名称\n\n- `role: string`\n  担任角色\n\n- `startDate: string`\n  开始日期\n\n- `description?: string`\n  项目描述\n\n- `endDate?: string`\n  结束日期\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; createdAt?: string; description?: string; endDate?: string; projectName?: string; role?: string; startDate?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; createdAt?: string; description?: string; endDate?: string; projectName?: string; role?: string; startDate?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultProjectExperience = await client.v1.seeker.profile.projects.update(0, {\n  projectName: 'projectName',\n  role: 'role',\n  startDate: '7321-69',\n});\n\nconsole.log(resultProjectExperience);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/projects/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "projectName": "projectName",\n          "role": "role",\n          "startDate": "7321-69"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.profile.projects.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultProjectExperience = await client.v1.seeker.profile.projects.update(0, {\n  projectName: 'projectName',\n  role: 'role',\n  startDate: '7321-69',\n});\n\nconsole.log(resultProjectExperience.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/seeker/profile/projects/{id}',
    httpMethod: 'delete',
    summary: '删除项目经历',
    description: '删除指定项目经历',
    stainlessPath: '(resource) v1.seeker.profile.projects > (method) delete',
    qualified: 'client.v1.seeker.profile.projects.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.seeker.profile.projects.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/seeker/profile/projects/{id}`\n\n删除指定项目经历\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.profile.projects.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/projects/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.profile.projects.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.profile.projects.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/seeker/profile/projects',
    httpMethod: 'get',
    summary: '获取项目经历列表',
    description: '获取当前求职者的所有项目经历',
    stainlessPath: '(resource) v1.seeker.profile.projects > (method) list',
    qualified: 'client.v1.seeker.profile.projects.list',
    response:
      '{ code?: number; data?: { id?: number; createdAt?: string; description?: string; endDate?: string; projectName?: string; role?: string; startDate?: string; }[]; message?: string; }',
    markdown:
      "## list\n\n`client.v1.seeker.profile.projects.list(): { code?: number; data?: project_experience_response[]; message?: string; }`\n\n**get** `/api/v1/seeker/profile/projects`\n\n获取当前求职者的所有项目经历\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; createdAt?: string; description?: string; endDate?: string; projectName?: string; role?: string; startDate?: string; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; createdAt?: string; description?: string; endDate?: string; projectName?: string; role?: string; startDate?: string; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst projects = await client.v1.seeker.profile.projects.list();\n\nconsole.log(projects);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/projects \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.profile.projects.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst projects = await client.v1.seeker.profile.projects.list();\n\nconsole.log(projects.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/seeker/profile/projects',
    httpMethod: 'post',
    summary: '创建项目经历',
    description: '添加新的项目经历',
    stainlessPath: '(resource) v1.seeker.profile.projects > (method) create',
    qualified: 'client.v1.seeker.profile.projects.create',
    params: [
      'projectName: string;',
      'role: string;',
      'startDate: string;',
      'description?: string;',
      'endDate?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: number; createdAt?: string; description?: string; endDate?: string; projectName?: string; role?: string; startDate?: string; }; message?: string; }',
    markdown:
      "## create\n\n`client.v1.seeker.profile.projects.create(projectName: string, role: string, startDate: string, description?: string, endDate?: string): { code?: number; data?: project_experience_response; message?: string; }`\n\n**post** `/api/v1/seeker/profile/projects`\n\n添加新的项目经历\n\n### Parameters\n\n- `projectName: string`\n  项目名称\n\n- `role: string`\n  担任角色\n\n- `startDate: string`\n  开始日期\n\n- `description?: string`\n  项目描述\n\n- `endDate?: string`\n  结束日期\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; createdAt?: string; description?: string; endDate?: string; projectName?: string; role?: string; startDate?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; createdAt?: string; description?: string; endDate?: string; projectName?: string; role?: string; startDate?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultProjectExperience = await client.v1.seeker.profile.projects.create({\n  projectName: 'projectName',\n  role: 'role',\n  startDate: '7321-69',\n});\n\nconsole.log(resultProjectExperience);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/projects \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "projectName": "projectName",\n          "role": "role",\n          "startDate": "7321-69"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.profile.projects.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultProjectExperience = await client.v1.seeker.profile.projects.create({\n  projectName: 'projectName',\n  role: 'role',\n  startDate: '7321-69',\n});\n\nconsole.log(resultProjectExperience.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/seeker/profile/job-intentions/{id}',
    httpMethod: 'put',
    summary: '更新求职意向',
    description: '更新指定求职意向',
    stainlessPath: '(resource) v1.seeker.profile.job_intentions > (method) update',
    qualified: 'client.v1.seeker.profile.jobIntentions.update',
    params: [
      'id: number;',
      'city: string;',
      'jobStatus: string;',
      'jobType: string;',
      'salaryMax: number;',
      'salaryMin: number;',
      'title: string;',
      'companySizes?: string[];',
      'companyTypes?: string[];',
      'overseasTypes?: string[];',
      'skills?: string[];',
    ],
    response:
      '{ code?: number; data?: { id?: number; city?: string; companySizes?: string[]; companyTypes?: string[]; createdAt?: string; jobStatus?: string; jobType?: string; overseasTypes?: string[]; salaryMax?: number; salaryMin?: number; skills?: string[]; title?: string; updatedAt?: string; }; message?: string; }',
    markdown:
      "## update\n\n`client.v1.seeker.profile.jobIntentions.update(id: number, city: string, jobStatus: string, jobType: string, salaryMax: number, salaryMin: number, title: string, companySizes?: string[], companyTypes?: string[], overseasTypes?: string[], skills?: string[]): { code?: number; data?: job_intention_response; message?: string; }`\n\n**put** `/api/v1/seeker/profile/job-intentions/{id}`\n\n更新指定求职意向\n\n### Parameters\n\n- `id: number`\n\n- `city: string`\n  期望城市\n\n- `jobStatus: string`\n  求职状态\n\n- `jobType: string`\n  工作类型\n\n- `salaryMax: number`\n  最高薪资(K)\n\n- `salaryMin: number`\n  最低薪资(K)\n\n- `title: string`\n  期望职位\n\n- `companySizes?: string[]`\n  期望企业规模\n\n- `companyTypes?: string[]`\n  期望企业类型\n\n- `overseasTypes?: string[]`\n  海外工作意愿\n\n- `skills?: string[]`\n  技能标签\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; city?: string; companySizes?: string[]; companyTypes?: string[]; createdAt?: string; jobStatus?: string; jobType?: string; overseasTypes?: string[]; salaryMax?: number; salaryMin?: number; skills?: string[]; title?: string; updatedAt?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; city?: string; companySizes?: string[]; companyTypes?: string[]; createdAt?: string; jobStatus?: string; jobType?: string; overseasTypes?: string[]; salaryMax?: number; salaryMin?: number; skills?: string[]; title?: string; updatedAt?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultJobIntention = await client.v1.seeker.profile.jobIntentions.update(0, {\n  city: 'city',\n  jobStatus: 'jobStatus',\n  jobType: 'jobType',\n  salaryMax: 1,\n  salaryMin: 1,\n  title: 'title',\n});\n\nconsole.log(resultJobIntention);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/job-intentions/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "city": "city",\n          "jobStatus": "jobStatus",\n          "jobType": "jobType",\n          "salaryMax": 1,\n          "salaryMin": 1,\n          "title": "title"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.profile.jobIntentions.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultJobIntention = await client.v1.seeker.profile.jobIntentions.update(0, {\n  city: 'city',\n  jobStatus: 'jobStatus',\n  jobType: 'jobType',\n  salaryMax: 1,\n  salaryMin: 1,\n  title: 'title',\n});\n\nconsole.log(resultJobIntention.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/seeker/profile/job-intentions/{id}',
    httpMethod: 'delete',
    summary: '删除求职意向',
    description: '删除指定求职意向',
    stainlessPath: '(resource) v1.seeker.profile.job_intentions > (method) delete',
    qualified: 'client.v1.seeker.profile.jobIntentions.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.seeker.profile.jobIntentions.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/seeker/profile/job-intentions/{id}`\n\n删除指定求职意向\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.profile.jobIntentions.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/job-intentions/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.profile.jobIntentions.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.profile.jobIntentions.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'retrieve_job_intentions',
    endpoint: '/api/v1/seeker/profile/job-intentions',
    httpMethod: 'get',
    summary: '获取求职意向列表',
    description: '获取当前求职者的所有求职意向（最多3个）',
    stainlessPath: '(resource) v1.seeker.profile.job_intentions > (method) retrieve_job_intentions',
    qualified: 'client.v1.seeker.profile.jobIntentions.retrieveJobIntentions',
    response:
      '{ code?: number; data?: { id?: number; city?: string; companySizes?: string[]; companyTypes?: string[]; createdAt?: string; jobStatus?: string; jobType?: string; overseasTypes?: string[]; salaryMax?: number; salaryMin?: number; skills?: string[]; title?: string; updatedAt?: string; }[]; message?: string; }',
    markdown:
      "## retrieve_job_intentions\n\n`client.v1.seeker.profile.jobIntentions.retrieveJobIntentions(): { code?: number; data?: job_intention_response[]; message?: string; }`\n\n**get** `/api/v1/seeker/profile/job-intentions`\n\n获取当前求职者的所有求职意向（最多3个）\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; city?: string; companySizes?: string[]; companyTypes?: string[]; createdAt?: string; jobStatus?: string; jobType?: string; overseasTypes?: string[]; salaryMax?: number; salaryMin?: number; skills?: string[]; title?: string; updatedAt?: string; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; city?: string; companySizes?: string[]; companyTypes?: string[]; createdAt?: string; jobStatus?: string; jobType?: string; overseasTypes?: string[]; salaryMax?: number; salaryMin?: number; skills?: string[]; title?: string; updatedAt?: string; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst response = await client.v1.seeker.profile.jobIntentions.retrieveJobIntentions();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/job-intentions \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.profile.jobIntentions.retrieveJobIntentions',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.seeker.profile.jobIntentions.retrieveJobIntentions();\n\nconsole.log(response.code);",
      },
    },
  },
  {
    name: 'job_intentions',
    endpoint: '/api/v1/seeker/profile/job-intentions',
    httpMethod: 'post',
    summary: '创建求职意向',
    description: '创建新的求职意向，最多可创建3个',
    stainlessPath: '(resource) v1.seeker.profile.job_intentions > (method) job_intentions',
    qualified: 'client.v1.seeker.profile.jobIntentions.jobIntentions',
    params: [
      'city: string;',
      'jobStatus: string;',
      'jobType: string;',
      'salaryMax: number;',
      'salaryMin: number;',
      'title: string;',
      'companySizes?: string[];',
      'companyTypes?: string[];',
      'overseasTypes?: string[];',
      'skills?: string[];',
    ],
    response:
      '{ code?: number; data?: { id?: number; city?: string; companySizes?: string[]; companyTypes?: string[]; createdAt?: string; jobStatus?: string; jobType?: string; overseasTypes?: string[]; salaryMax?: number; salaryMin?: number; skills?: string[]; title?: string; updatedAt?: string; }; message?: string; }',
    markdown:
      "## job_intentions\n\n`client.v1.seeker.profile.jobIntentions.jobIntentions(city: string, jobStatus: string, jobType: string, salaryMax: number, salaryMin: number, title: string, companySizes?: string[], companyTypes?: string[], overseasTypes?: string[], skills?: string[]): { code?: number; data?: job_intention_response; message?: string; }`\n\n**post** `/api/v1/seeker/profile/job-intentions`\n\n创建新的求职意向，最多可创建3个\n\n### Parameters\n\n- `city: string`\n  期望城市\n\n- `jobStatus: string`\n  求职状态\n\n- `jobType: string`\n  工作类型\n\n- `salaryMax: number`\n  最高薪资(K)\n\n- `salaryMin: number`\n  最低薪资(K)\n\n- `title: string`\n  期望职位\n\n- `companySizes?: string[]`\n  期望企业规模\n\n- `companyTypes?: string[]`\n  期望企业类型\n\n- `overseasTypes?: string[]`\n  海外工作意愿\n\n- `skills?: string[]`\n  技能标签\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; city?: string; companySizes?: string[]; companyTypes?: string[]; createdAt?: string; jobStatus?: string; jobType?: string; overseasTypes?: string[]; salaryMax?: number; salaryMin?: number; skills?: string[]; title?: string; updatedAt?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; city?: string; companySizes?: string[]; companyTypes?: string[]; createdAt?: string; jobStatus?: string; jobType?: string; overseasTypes?: string[]; salaryMax?: number; salaryMin?: number; skills?: string[]; title?: string; updatedAt?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultJobIntention = await client.v1.seeker.profile.jobIntentions.jobIntentions({\n  city: 'city',\n  jobStatus: 'jobStatus',\n  jobType: 'jobType',\n  salaryMax: 1,\n  salaryMin: 1,\n  title: 'title',\n});\n\nconsole.log(resultJobIntention);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/job-intentions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "city": "city",\n          "jobStatus": "jobStatus",\n          "jobType": "jobType",\n          "salaryMax": 1,\n          "salaryMin": 1,\n          "title": "title"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.profile.jobIntentions.jobIntentions',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultJobIntention = await client.v1.seeker.profile.jobIntentions.jobIntentions({\n  city: 'city',\n  jobStatus: 'jobStatus',\n  jobType: 'jobType',\n  salaryMax: 1,\n  salaryMin: 1,\n  title: 'title',\n});\n\nconsole.log(resultJobIntention.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/seeker/profile/education/{id}',
    httpMethod: 'put',
    summary: '更新教育经历',
    description: '更新指定教育经历',
    stainlessPath: '(resource) v1.seeker.profile.education > (method) update',
    qualified: 'client.v1.seeker.profile.education.update',
    params: [
      'id: number;',
      'degree: string;',
      'major: string;',
      'school: string;',
      'startDate: string;',
      'endDate?: string;',
      'studyType?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: number; createdAt?: string; degree?: string; endDate?: string; major?: string; school?: string; startDate?: string; studyType?: string; }; message?: string; }',
    markdown:
      "## update\n\n`client.v1.seeker.profile.education.update(id: number, degree: string, major: string, school: string, startDate: string, endDate?: string, studyType?: string): { code?: number; data?: education_response; message?: string; }`\n\n**put** `/api/v1/seeker/profile/education/{id}`\n\n更新指定教育经历\n\n### Parameters\n\n- `id: number`\n\n- `degree: string`\n  学历\n\n- `major: string`\n  专业\n\n- `school: string`\n  学校名称\n\n- `startDate: string`\n  开始日期\n\n- `endDate?: string`\n  结束日期\n\n- `studyType?: string`\n  学习类型\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; createdAt?: string; degree?: string; endDate?: string; major?: string; school?: string; startDate?: string; studyType?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; createdAt?: string; degree?: string; endDate?: string; major?: string; school?: string; startDate?: string; studyType?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultEducation = await client.v1.seeker.profile.education.update(0, {\n  degree: 'degree',\n  major: 'major',\n  school: 'school',\n  startDate: '7321-69',\n});\n\nconsole.log(resultEducation);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/education/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "degree": "degree",\n          "major": "major",\n          "school": "school",\n          "startDate": "7321-69"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.profile.education.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultEducation = await client.v1.seeker.profile.education.update(0, {\n  degree: 'degree',\n  major: 'major',\n  school: 'school',\n  startDate: '7321-69',\n});\n\nconsole.log(resultEducation.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/seeker/profile/education/{id}',
    httpMethod: 'delete',
    summary: '删除教育经历',
    description: '删除指定教育经历',
    stainlessPath: '(resource) v1.seeker.profile.education > (method) delete',
    qualified: 'client.v1.seeker.profile.education.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.seeker.profile.education.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/seeker/profile/education/{id}`\n\n删除指定教育经历\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.profile.education.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/education/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.profile.education.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.profile.education.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/seeker/profile/education',
    httpMethod: 'get',
    summary: '获取教育经历列表',
    description: '获取当前求职者的所有教育经历',
    stainlessPath: '(resource) v1.seeker.profile.education > (method) list',
    qualified: 'client.v1.seeker.profile.education.list',
    response:
      '{ code?: number; data?: { id?: number; createdAt?: string; degree?: string; endDate?: string; major?: string; school?: string; startDate?: string; studyType?: string; }[]; message?: string; }',
    markdown:
      "## list\n\n`client.v1.seeker.profile.education.list(): { code?: number; data?: education_response[]; message?: string; }`\n\n**get** `/api/v1/seeker/profile/education`\n\n获取当前求职者的所有教育经历\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; createdAt?: string; degree?: string; endDate?: string; major?: string; school?: string; startDate?: string; studyType?: string; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; createdAt?: string; degree?: string; endDate?: string; major?: string; school?: string; startDate?: string; studyType?: string; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst educations = await client.v1.seeker.profile.education.list();\n\nconsole.log(educations);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/education \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.profile.education.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst educations = await client.v1.seeker.profile.education.list();\n\nconsole.log(educations.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/seeker/profile/education',
    httpMethod: 'post',
    summary: '创建教育经历',
    description: '添加新的教育经历',
    stainlessPath: '(resource) v1.seeker.profile.education > (method) create',
    qualified: 'client.v1.seeker.profile.education.create',
    params: [
      'degree: string;',
      'major: string;',
      'school: string;',
      'startDate: string;',
      'endDate?: string;',
      'studyType?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: number; createdAt?: string; degree?: string; endDate?: string; major?: string; school?: string; startDate?: string; studyType?: string; }; message?: string; }',
    markdown:
      "## create\n\n`client.v1.seeker.profile.education.create(degree: string, major: string, school: string, startDate: string, endDate?: string, studyType?: string): { code?: number; data?: education_response; message?: string; }`\n\n**post** `/api/v1/seeker/profile/education`\n\n添加新的教育经历\n\n### Parameters\n\n- `degree: string`\n  学历\n\n- `major: string`\n  专业\n\n- `school: string`\n  学校名称\n\n- `startDate: string`\n  开始日期\n\n- `endDate?: string`\n  结束日期\n\n- `studyType?: string`\n  学习类型\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; createdAt?: string; degree?: string; endDate?: string; major?: string; school?: string; startDate?: string; studyType?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; createdAt?: string; degree?: string; endDate?: string; major?: string; school?: string; startDate?: string; studyType?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultEducation = await client.v1.seeker.profile.education.create({\n  degree: 'degree',\n  major: 'major',\n  school: 'school',\n  startDate: '7321-69',\n});\n\nconsole.log(resultEducation);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/education \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "degree": "degree",\n          "major": "major",\n          "school": "school",\n          "startDate": "7321-69"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.profile.education.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultEducation = await client.v1.seeker.profile.education.create({\n  degree: 'degree',\n  major: 'major',\n  school: 'school',\n  startDate: '7321-69',\n});\n\nconsole.log(resultEducation.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/seeker/profile/qualifications',
    httpMethod: 'get',
    summary: '获取资格证书列表',
    description: '获取当前求职者的所有资格证书',
    stainlessPath: '(resource) v1.seeker.profile.qualifications > (method) list',
    qualified: 'client.v1.seeker.profile.qualifications.list',
    response:
      '{ code?: number; data?: { id?: number; createdAt?: string; issueDate?: string; name?: string; }[]; message?: string; }',
    markdown:
      "## list\n\n`client.v1.seeker.profile.qualifications.list(): { code?: number; data?: qualification_response[]; message?: string; }`\n\n**get** `/api/v1/seeker/profile/qualifications`\n\n获取当前求职者的所有资格证书\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; createdAt?: string; issueDate?: string; name?: string; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; createdAt?: string; issueDate?: string; name?: string; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst qualifications = await client.v1.seeker.profile.qualifications.list();\n\nconsole.log(qualifications);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/qualifications \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.profile.qualifications.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst qualifications = await client.v1.seeker.profile.qualifications.list();\n\nconsole.log(qualifications.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/seeker/profile/qualifications',
    httpMethod: 'post',
    summary: '创建资格证书',
    description: '添加新的资格证书',
    stainlessPath: '(resource) v1.seeker.profile.qualifications > (method) create',
    qualified: 'client.v1.seeker.profile.qualifications.create',
    params: ['name: string;', 'issueDate?: string;'],
    response:
      '{ code?: number; data?: { id?: number; createdAt?: string; issueDate?: string; name?: string; }; message?: string; }',
    markdown:
      "## create\n\n`client.v1.seeker.profile.qualifications.create(name: string, issueDate?: string): { code?: number; data?: qualification_response; message?: string; }`\n\n**post** `/api/v1/seeker/profile/qualifications`\n\n添加新的资格证书\n\n### Parameters\n\n- `name: string`\n  证书名称\n\n- `issueDate?: string`\n  获得时间\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; createdAt?: string; issueDate?: string; name?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; createdAt?: string; issueDate?: string; name?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst qualification = await client.v1.seeker.profile.qualifications.create({ name: 'name' });\n\nconsole.log(qualification);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/qualifications \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "name": "name"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.profile.qualifications.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst qualification = await client.v1.seeker.profile.qualifications.create({ name: 'name' });\n\nconsole.log(qualification.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/seeker/profile/qualifications/{id}',
    httpMethod: 'delete',
    summary: '删除资格证书',
    description: '删除指定资格证书',
    stainlessPath: '(resource) v1.seeker.profile.qualifications > (method) delete',
    qualified: 'client.v1.seeker.profile.qualifications.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.seeker.profile.qualifications.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/seeker/profile/qualifications/{id}`\n\n删除指定资格证书\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.profile.qualifications.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/profile/qualifications/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.profile.qualifications.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.profile.qualifications.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'retrieve_assistant_settings',
    endpoint: '/api/v1/seeker/preferences/assistant-settings',
    httpMethod: 'get',
    summary: '获取助手设置',
    description: '获取助手设置',
    stainlessPath:
      '(resource) v1.seeker.preferences.assistant_settings > (method) retrieve_assistant_settings',
    qualified: 'client.v1.seeker.preferences.assistantSettings.retrieveAssistantSettings',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve_assistant_settings\n\n`client.v1.seeker.preferences.assistantSettings.retrieveAssistantSettings(): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/seeker/preferences/assistant-settings`\n\n获取助手设置\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.seeker.preferences.assistantSettings.retrieveAssistantSettings();\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/preferences/assistant-settings \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.preferences.assistantSettings.retrieveAssistantSettings',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject =\n  await client.v1.seeker.preferences.assistantSettings.retrieveAssistantSettings();\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update_assistant_settings',
    endpoint: '/api/v1/seeker/preferences/assistant-settings',
    httpMethod: 'put',
    summary: '更新助手设置',
    description: '更新助手设置',
    stainlessPath: '(resource) v1.seeker.preferences.assistant_settings > (method) update_assistant_settings',
    qualified: 'client.v1.seeker.preferences.assistantSettings.updateAssistantSettings',
    params: ['body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_assistant_settings\n\n`client.v1.seeker.preferences.assistantSettings.updateAssistantSettings(body: object): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/v1/seeker/preferences/assistant-settings`\n\n更新助手设置\n\n### Parameters\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.seeker.preferences.assistantSettings.updateAssistantSettings({ body: { foo: {} } });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/preferences/assistant-settings \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.preferences.assistantSettings.updateAssistantSettings',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject =\n  await client.v1.seeker.preferences.assistantSettings.updateAssistantSettings({\n    body: { foo: {} },\n  });\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve_common_phrases',
    endpoint: '/api/v1/seeker/preferences/common-phrases',
    httpMethod: 'get',
    summary: '获取常用语列表',
    description: '获取常用语列表',
    stainlessPath: '(resource) v1.seeker.preferences.common_phrases > (method) retrieve_common_phrases',
    qualified: 'client.v1.seeker.preferences.commonPhrases.retrieveCommonPhrases',
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## retrieve_common_phrases\n\n`client.v1.seeker.preferences.commonPhrases.retrieveCommonPhrases(): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/v1/seeker/preferences/common-phrases`\n\n获取常用语列表\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.v1.seeker.preferences.commonPhrases.retrieveCommonPhrases();\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/preferences/common-phrases \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.preferences.commonPhrases.retrieveCommonPhrases',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.v1.seeker.preferences.commonPhrases.retrieveCommonPhrases();\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'common_phrases',
    endpoint: '/api/v1/seeker/preferences/common-phrases',
    httpMethod: 'post',
    summary: '创建常用语',
    description: '创建常用语',
    stainlessPath: '(resource) v1.seeker.preferences.common_phrases > (method) common_phrases',
    qualified: 'client.v1.seeker.preferences.commonPhrases.commonPhrases',
    params: ['body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## common_phrases\n\n`client.v1.seeker.preferences.commonPhrases.commonPhrases(body: object): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/seeker/preferences/common-phrases`\n\n创建常用语\n\n### Parameters\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.seeker.preferences.commonPhrases.commonPhrases({ body: { foo: 'string' } });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/preferences/common-phrases \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": "string"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.preferences.commonPhrases.commonPhrases',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.seeker.preferences.commonPhrases.commonPhrases({\n  body: { foo: 'string' },\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/seeker/preferences/common-phrases/{phraseId}',
    httpMethod: 'delete',
    summary: '删除常用语',
    description: '删除常用语',
    stainlessPath: '(resource) v1.seeker.preferences.common_phrases > (method) delete',
    qualified: 'client.v1.seeker.preferences.commonPhrases.delete',
    params: ['phraseId: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.seeker.preferences.commonPhrases.delete(phraseId: string): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/seeker/preferences/common-phrases/{phraseId}`\n\n删除常用语\n\n### Parameters\n\n- `phraseId: string`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.preferences.commonPhrases.delete('phraseId');\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/preferences/common-phrases/$PHRASE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.preferences.commonPhrases.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.preferences.commonPhrases.delete('phraseId');\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'retrieve_blocked_companies',
    endpoint: '/api/v1/seeker/preferences/blocked-companies',
    httpMethod: 'get',
    summary: '获取屏蔽企业列表',
    description: '获取屏蔽企业列表',
    stainlessPath: '(resource) v1.seeker.preferences.blocked_companies > (method) retrieve_blocked_companies',
    qualified: 'client.v1.seeker.preferences.blockedCompanies.retrieveBlockedCompanies',
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## retrieve_blocked_companies\n\n`client.v1.seeker.preferences.blockedCompanies.retrieveBlockedCompanies(): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/v1/seeker/preferences/blocked-companies`\n\n获取屏蔽企业列表\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.v1.seeker.preferences.blockedCompanies.retrieveBlockedCompanies();\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/preferences/blocked-companies \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.preferences.blockedCompanies.retrieveBlockedCompanies',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners =\n  await client.v1.seeker.preferences.blockedCompanies.retrieveBlockedCompanies();\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'blocked_companies',
    endpoint: '/api/v1/seeker/preferences/blocked-companies',
    httpMethod: 'post',
    summary: '添加屏蔽企业',
    description: '添加屏蔽企业',
    stainlessPath: '(resource) v1.seeker.preferences.blocked_companies > (method) blocked_companies',
    qualified: 'client.v1.seeker.preferences.blockedCompanies.blockedCompanies',
    params: ['body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## blocked_companies\n\n`client.v1.seeker.preferences.blockedCompanies.blockedCompanies(body: object): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/seeker/preferences/blocked-companies`\n\n添加屏蔽企业\n\n### Parameters\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.seeker.preferences.blockedCompanies.blockedCompanies({ body: { foo: 'string' } });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/preferences/blocked-companies \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": "string"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.preferences.blockedCompanies.blockedCompanies',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.seeker.preferences.blockedCompanies.blockedCompanies({\n  body: { foo: 'string' },\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/seeker/preferences/blocked-companies/{blockId}',
    httpMethod: 'delete',
    summary: '移除屏蔽企业',
    description: '移除屏蔽企业',
    stainlessPath: '(resource) v1.seeker.preferences.blocked_companies > (method) delete',
    qualified: 'client.v1.seeker.preferences.blockedCompanies.delete',
    params: ['blockId: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.seeker.preferences.blockedCompanies.delete(blockId: string): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/seeker/preferences/blocked-companies/{blockId}`\n\n移除屏蔽企业\n\n### Parameters\n\n- `blockId: string`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.preferences.blockedCompanies.delete('blockId');\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/preferences/blocked-companies/$BLOCK_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.preferences.blockedCompanies.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.preferences.blockedCompanies.delete('blockId');\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'recall',
    endpoint: '/api/v1/seeker/message/{messageId}/recall',
    httpMethod: 'post',
    summary: '撤回消息',
    description: '撤回消息',
    stainlessPath: '(resource) v1.seeker.message > (method) recall',
    qualified: 'client.v1.seeker.message.recall',
    params: ['messageId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## recall\n\n`client.v1.seeker.message.recall(messageId: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/seeker/message/{messageId}/recall`\n\n撤回消息\n\n### Parameters\n\n- `messageId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.message.recall(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/message/$MESSAGE_ID/recall \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.message.recall',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.message.recall(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'update_pin',
    endpoint: '/api/v1/seeker/message/conversations/{conversationId}/pin',
    httpMethod: 'put',
    summary: '置顶/取消置顶会话',
    description: '置顶/取消置顶会话',
    stainlessPath: '(resource) v1.seeker.message.conversations > (method) update_pin',
    qualified: 'client.v1.seeker.message.conversations.updatePin',
    params: ['conversationId: number;', 'isPinned: boolean;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_pin\n\n`client.v1.seeker.message.conversations.updatePin(conversationId: number, isPinned: boolean): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/v1/seeker/message/conversations/{conversationId}/pin`\n\n置顶/取消置顶会话\n\n### Parameters\n\n- `conversationId: number`\n\n- `isPinned: boolean`\n  是否置顶\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.message.conversations.updatePin(0, { isPinned: true });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/message/conversations/$CONVERSATION_ID/pin \\\n    -X PUT \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.message.conversations.updatePin',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.message.conversations.updatePin(0, { isPinned: true });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'update_mute',
    endpoint: '/api/v1/seeker/message/conversations/{conversationId}/mute',
    httpMethod: 'put',
    summary: '免打扰/取消免打扰',
    description: '免打扰/取消免打扰',
    stainlessPath: '(resource) v1.seeker.message.conversations > (method) update_mute',
    qualified: 'client.v1.seeker.message.conversations.updateMute',
    params: ['conversationId: number;', 'isMuted: boolean;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_mute\n\n`client.v1.seeker.message.conversations.updateMute(conversationId: number, isMuted: boolean): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/v1/seeker/message/conversations/{conversationId}/mute`\n\n免打扰/取消免打扰\n\n### Parameters\n\n- `conversationId: number`\n\n- `isMuted: boolean`\n  是否免打扰\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.message.conversations.updateMute(0, { isMuted: true });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/message/conversations/$CONVERSATION_ID/mute \\\n    -X PUT \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.message.conversations.updateMute',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.message.conversations.updateMute(0, { isMuted: true });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/seeker/message/conversations',
    httpMethod: 'get',
    summary: '获取会话列表',
    description: '获取当前用户的所有会话列表',
    stainlessPath: '(resource) v1.seeker.message.conversations > (method) list',
    qualified: 'client.v1.seeker.message.conversations.list',
    response:
      '{ code?: number; data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: position_info; positionId?: string; recentMessages?: message_response[]; resumeId?: string; status?: string; talent?: talent_info; talentId?: string; title?: string; type?: string; unreadCount?: number; }[]; message?: string; }',
    markdown:
      "## list\n\n`client.v1.seeker.message.conversations.list(): { code?: number; data?: conversation_response[]; message?: string; }`\n\n**get** `/api/v1/seeker/message/conversations`\n\n获取当前用户的所有会话列表\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: position_info; positionId?: string; recentMessages?: message_response[]; resumeId?: string; status?: string; talent?: talent_info; talentId?: string; title?: string; type?: string; unreadCount?: number; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: { id?: string; name?: string; }; positionId?: string; recentMessages?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: object; senderId?: string; senderType?: string; status?: string; }[]; resumeId?: string; status?: string; talent?: { id?: string; avatar?: string; name?: string; targetPosition?: string; }; talentId?: string; title?: string; type?: string; unreadCount?: number; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListConversation = await client.v1.seeker.message.conversations.list();\n\nconsole.log(resultListConversation);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/message/conversations \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.message.conversations.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListConversation = await client.v1.seeker.message.conversations.list();\n\nconsole.log(resultListConversation.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/seeker/message/conversations',
    httpMethod: 'post',
    summary: '创建会话',
    description: '创建新的聊天会话',
    stainlessPath: '(resource) v1.seeker.message.conversations > (method) create',
    qualified: 'client.v1.seeker.message.conversations.create',
    params: [
      'talentId: number;',
      'positionId?: number;',
      'resumeId?: number;',
      'title?: string;',
      'type?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: position_info; positionId?: string; recentMessages?: message_response[]; resumeId?: string; status?: string; talent?: talent_info; talentId?: string; title?: string; type?: string; unreadCount?: number; }; message?: string; }',
    markdown:
      "## create\n\n`client.v1.seeker.message.conversations.create(talentId: number, positionId?: number, resumeId?: number, title?: string, type?: string): { code?: number; data?: conversation_response; message?: string; }`\n\n**post** `/api/v1/seeker/message/conversations`\n\n创建新的聊天会话\n\n### Parameters\n\n- `talentId: number`\n  人才ID\n\n- `positionId?: number`\n  职位ID\n\n- `resumeId?: number`\n  简历ID\n\n- `title?: string`\n  会话标题\n\n- `type?: string`\n  会话类型: candidate候选人/ai_assistant AI助理\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: position_info; positionId?: string; recentMessages?: message_response[]; resumeId?: string; status?: string; talent?: talent_info; talentId?: string; title?: string; type?: string; unreadCount?: number; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: { id?: string; name?: string; }; positionId?: string; recentMessages?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: object; senderId?: string; senderType?: string; status?: string; }[]; resumeId?: string; status?: string; talent?: { id?: string; avatar?: string; name?: string; targetPosition?: string; }; talentId?: string; title?: string; type?: string; unreadCount?: number; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultConversation = await client.v1.seeker.message.conversations.create({ talentId: 1 });\n\nconsole.log(resultConversation);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/message/conversations \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "talentId": 1,\n          "positionId": 1,\n          "resumeId": 1,\n          "title": "与李明的会话",\n          "type": "candidate"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.message.conversations.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultConversation = await client.v1.seeker.message.conversations.create({ talentId: 1 });\n\nconsole.log(resultConversation.code);",
      },
    },
  },
  {
    name: 'read',
    endpoint: '/api/v1/seeker/message/conversations/{conversationId}/read',
    httpMethod: 'post',
    summary: '标记消息已读',
    description: '标记消息已读',
    stainlessPath: '(resource) v1.seeker.message.conversations > (method) read',
    qualified: 'client.v1.seeker.message.conversations.read',
    params: ['conversationId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## read\n\n`client.v1.seeker.message.conversations.read(conversationId: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/seeker/message/conversations/{conversationId}/read`\n\n标记消息已读\n\n### Parameters\n\n- `conversationId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.message.conversations.read(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/message/conversations/$CONVERSATION_ID/read \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.message.conversations.read',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.message.conversations.read(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/seeker/message/conversations/{conversationId}',
    httpMethod: 'get',
    summary: '获取会话详情',
    description: '获取会话详情',
    stainlessPath: '(resource) v1.seeker.message.conversations > (method) retrieve',
    qualified: 'client.v1.seeker.message.conversations.retrieve',
    params: ['conversationId: number;'],
    response:
      '{ code?: number; data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: position_info; positionId?: string; recentMessages?: message_response[]; resumeId?: string; status?: string; talent?: talent_info; talentId?: string; title?: string; type?: string; unreadCount?: number; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.seeker.message.conversations.retrieve(conversationId: number): { code?: number; data?: conversation_response; message?: string; }`\n\n**get** `/api/v1/seeker/message/conversations/{conversationId}`\n\n获取会话详情\n\n### Parameters\n\n- `conversationId: number`\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: position_info; positionId?: string; recentMessages?: message_response[]; resumeId?: string; status?: string; talent?: talent_info; talentId?: string; title?: string; type?: string; unreadCount?: number; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: { id?: string; name?: string; }; positionId?: string; recentMessages?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: object; senderId?: string; senderType?: string; status?: string; }[]; resumeId?: string; status?: string; talent?: { id?: string; avatar?: string; name?: string; targetPosition?: string; }; talentId?: string; title?: string; type?: string; unreadCount?: number; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultConversation = await client.v1.seeker.message.conversations.retrieve(0);\n\nconsole.log(resultConversation);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/message/conversations/$CONVERSATION_ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.message.conversations.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultConversation = await client.v1.seeker.message.conversations.retrieve(0);\n\nconsole.log(resultConversation.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/seeker/message/conversations/{conversationId}',
    httpMethod: 'delete',
    summary: '删除会话',
    description: '删除会话',
    stainlessPath: '(resource) v1.seeker.message.conversations > (method) delete',
    qualified: 'client.v1.seeker.message.conversations.delete',
    params: ['conversationId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.seeker.message.conversations.delete(conversationId: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/seeker/message/conversations/{conversationId}`\n\n删除会话\n\n### Parameters\n\n- `conversationId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.message.conversations.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/message/conversations/$CONVERSATION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.message.conversations.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.message.conversations.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/seeker/message/conversations/{conversationId}/messages',
    httpMethod: 'get',
    summary: '获取会话消息列表',
    description: '分页获取指定会话的消息列表',
    stainlessPath: '(resource) v1.seeker.message.conversations.messages > (method) list',
    qualified: 'client.v1.seeker.message.conversations.messages.list',
    params: ['conversationId: number;', 'before?: string;', 'page?: number;', 'pageSize?: number;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: object; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.seeker.message.conversations.messages.list(conversationId: number, before?: string, page?: number, pageSize?: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/seeker/message/conversations/{conversationId}/messages`\n\n分页获取指定会话的消息列表\n\n### Parameters\n\n- `conversationId: number`\n\n- `before?: string`\n  获取此时间之前的消息\n\n- `page?: number`\n  页码\n\n- `pageSize?: number`\n  每页数量\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: object; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: { id?: string; avatar?: string; name?: string; type?: string; }; senderId?: string; senderType?: string; status?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMessage = await client.v1.seeker.message.conversations.messages.list(0);\n\nconsole.log(resultPageResultMessage);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/message/conversations/$CONVERSATION_ID/messages \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.message.conversations.messages.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMessage = await client.v1.seeker.message.conversations.messages.list(0);\n\nconsole.log(resultPageResultMessage.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/seeker/message/conversations/{conversationId}/messages',
    httpMethod: 'post',
    summary: '发送消息',
    description: '向指定会话发送消息',
    stainlessPath: '(resource) v1.seeker.message.conversations.messages > (method) create',
    qualified: 'client.v1.seeker.message.conversations.messages.create',
    params: [
      'conversationId: number;',
      'content: string;',
      'conversationId: number;',
      'clientMsgId?: string;',
      'extraData?: string;',
      'msgType?: string;',
      'replyToId?: number;',
    ],
    response:
      '{ code?: number; data?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: object; senderId?: string; senderType?: string; status?: string; }; message?: string; }',
    markdown:
      "## create\n\n`client.v1.seeker.message.conversations.messages.create(conversationId: number, content: string, conversationId: number, clientMsgId?: string, extraData?: string, msgType?: string, replyToId?: number): { code?: number; data?: message_response; message?: string; }`\n\n**post** `/api/v1/seeker/message/conversations/{conversationId}/messages`\n\n向指定会话发送消息\n\n### Parameters\n\n- `conversationId: number`\n\n- `content: string`\n  消息内容\n\n- `conversationId: number`\n  会话ID\n\n- `clientMsgId?: string`\n  客户端消息ID(用于去重)\n\n- `extraData?: string`\n  扩展数据(JSON格式)\n\n- `msgType?: string`\n  消息类型: text文本/image图片/file文件\n\n- `replyToId?: number`\n  回复的消息ID\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: object; senderId?: string; senderType?: string; status?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: { id?: string; avatar?: string; name?: string; type?: string; }; senderId?: string; senderType?: string; status?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMessage = await client.v1.seeker.message.conversations.messages.create(0, { content: '您好，我们安排了面试', conversationId: 1 });\n\nconsole.log(resultMessage);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/message/conversations/$CONVERSATION_ID/messages \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "content": "您好，我们安排了面试",\n          "conversationId": 1,\n          "clientMsgId": "client-msg-001",\n          "msgType": "text",\n          "replyToId": 123\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.message.conversations.messages.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMessage = await client.v1.seeker.message.conversations.messages.create(0, {\n  content: '您好，我们安排了面试',\n  conversationId: 1,\n});\n\nconsole.log(resultMessage.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/seeker/account/me',
    httpMethod: 'get',
    summary: '获取当前用户信息',
    description: '获取当前登录用户的详细信息',
    stainlessPath: '(resource) v1.seeker.account.me > (method) list',
    qualified: 'client.v1.seeker.account.me.list',
    response:
      '{ code?: number; data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.seeker.account.me.list(): { code?: number; data?: user_info_response; message?: string; }`\n\n**get** `/api/v1/seeker/account/me`\n\n获取当前登录用户的详细信息\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultUserInfo = await client.v1.seeker.account.me.list();\n\nconsole.log(resultUserInfo);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/account/me \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.account.me.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultUserInfo = await client.v1.seeker.account.me.list();\n\nconsole.log(resultUserInfo.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/seeker/account/me',
    httpMethod: 'put',
    summary: '更新当前用户信息',
    description: '更新当前登录用户的信息',
    stainlessPath: '(resource) v1.seeker.account.me > (method) create',
    qualified: 'client.v1.seeker.account.me.create',
    params: ['name: string;', 'avatar?: string;', 'title?: string;'],
    response:
      '{ code?: number; data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }',
    markdown:
      "## create\n\n`client.v1.seeker.account.me.create(name: string, avatar?: string, title?: string): { code?: number; data?: user_info_response; message?: string; }`\n\n**put** `/api/v1/seeker/account/me`\n\n更新当前登录用户的信息\n\n### Parameters\n\n- `name: string`\n  姓名\n\n- `avatar?: string`\n  头像URL\n\n- `title?: string`\n  职位头衔\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultUserInfo = await client.v1.seeker.account.me.create({ name: '张三' });\n\nconsole.log(resultUserInfo);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/account/me \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "name": "张三",\n          "avatar": "https://example.com/avatar.jpg",\n          "title": "高级招聘经理"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.account.me.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultUserInfo = await client.v1.seeker.account.me.create({ name: '张三' });\n\nconsole.log(resultUserInfo.code);",
      },
    },
  },
  {
    name: 'patch_all',
    endpoint: '/api/v1/seeker/account/me',
    httpMethod: 'patch',
    summary: '更新当前用户信息（PATCH）',
    description: '兼容 PATCH 方法',
    stainlessPath: '(resource) v1.seeker.account.me > (method) patch_all',
    qualified: 'client.v1.seeker.account.me.patchAll',
    params: ['name: string;', 'avatar?: string;', 'title?: string;'],
    response:
      '{ code?: number; data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }',
    markdown:
      "## patch_all\n\n`client.v1.seeker.account.me.patchAll(name: string, avatar?: string, title?: string): { code?: number; data?: user_info_response; message?: string; }`\n\n**patch** `/api/v1/seeker/account/me`\n\n兼容 PATCH 方法\n\n### Parameters\n\n- `name: string`\n  姓名\n\n- `avatar?: string`\n  头像URL\n\n- `title?: string`\n  职位头衔\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultUserInfo = await client.v1.seeker.account.me.patchAll({ name: '张三' });\n\nconsole.log(resultUserInfo);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/account/me \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "name": "张三",\n          "avatar": "https://example.com/avatar.jpg",\n          "title": "高级招聘经理"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.account.me.patchAll',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultUserInfo = await client.v1.seeker.account.me.patchAll({ name: '张三' });\n\nconsole.log(resultUserInfo.code);",
      },
    },
  },
  {
    name: 'update_password',
    endpoint: '/api/v1/seeker/account/me/password',
    httpMethod: 'put',
    summary: '修改密码',
    description: '修改当前登录用户的密码',
    stainlessPath: '(resource) v1.seeker.account.me > (method) update_password',
    qualified: 'client.v1.seeker.account.me.updatePassword',
    params: ['newPassword: string;', 'oldPassword: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_password\n\n`client.v1.seeker.account.me.updatePassword(newPassword: string, oldPassword: string): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/v1/seeker/account/me/password`\n\n修改当前登录用户的密码\n\n### Parameters\n\n- `newPassword: string`\n  新密码\n\n- `oldPassword: string`\n  原密码\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.account.me.updatePassword({ newPassword: 'new123', oldPassword: 'old123' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/account/me/password \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "newPassword": "new123",\n          "oldPassword": "old123"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.account.me.updatePassword',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.account.me.updatePassword({\n  newPassword: 'new123',\n  oldPassword: 'old123',\n});\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'avatar',
    endpoint: '/api/v1/seeker/account/me/avatar',
    httpMethod: 'post',
    summary: '上传头像',
    description: '上传用户头像并写回用户资料',
    stainlessPath: '(resource) v1.seeker.account.me > (method) avatar',
    qualified: 'client.v1.seeker.account.me.avatar',
    params: ['file: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## avatar\n\n`client.v1.seeker.account.me.avatar(file: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/seeker/account/me/avatar`\n\n上传用户头像并写回用户资料\n\n### Parameters\n\n- `file: string`\n  头像文件\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringString = await client.v1.seeker.account.me.avatar({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultMapStringString);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/v1/seeker/account/me/avatar \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.v1.seeker.account.me.avatar',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringString = await client.v1.seeker.account.me.avatar({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultMapStringString.code);",
      },
    },
  },
  {
    name: 'read',
    endpoint: '/api/v1/seeker/notifications/{notificationId}/read',
    httpMethod: 'post',
    summary: '标记通知已读',
    description: '标记通知已读',
    stainlessPath: '(resource) v1.seeker.notifications > (method) read',
    qualified: 'client.v1.seeker.notifications.read',
    params: ['notificationId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## read\n\n`client.v1.seeker.notifications.read(notificationId: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/seeker/notifications/{notificationId}/read`\n\n标记通知已读\n\n### Parameters\n\n- `notificationId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.notifications.read(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/notifications/$NOTIFICATION_ID/read \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.notifications.read',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.notifications.read(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'read_all',
    endpoint: '/api/v1/seeker/notifications/read-all',
    httpMethod: 'post',
    summary: '标记所有通知已读',
    description: '标记所有通知已读',
    stainlessPath: '(resource) v1.seeker.notifications > (method) read_all',
    qualified: 'client.v1.seeker.notifications.readAll',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## read_all\n\n`client.v1.seeker.notifications.readAll(): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/seeker/notifications/read-all`\n\n标记所有通知已读\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.notifications.readAll();\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/notifications/read-all \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.notifications.readAll',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.notifications.readAll();\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/seeker/notifications',
    httpMethod: 'get',
    summary: '获取通知列表',
    description: '分页获取当前用户的通知列表',
    stainlessPath: '(resource) v1.seeker.notifications > (method) list',
    qualified: 'client.v1.seeker.notifications.list',
    params: ['page?: number;', 'pageSize?: number;'],
    response:
      '{ code?: number; data?: { list?: { id?: string; actionUrl?: string; category?: string; content?: string; createdAt?: string; extraData?: string; isRead?: number; readAt?: string; related?: object; title?: string; type?: string; }[]; pagination?: object; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.seeker.notifications.list(page?: number, pageSize?: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/seeker/notifications`\n\n分页获取当前用户的通知列表\n\n### Parameters\n\n- `page?: number`\n  页码\n\n- `pageSize?: number`\n  每页数量\n\n### Returns\n\n- `{ code?: number; data?: { list?: { id?: string; actionUrl?: string; category?: string; content?: string; createdAt?: string; extraData?: string; isRead?: number; readAt?: string; related?: object; title?: string; type?: string; }[]; pagination?: object; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; actionUrl?: string; category?: string; content?: string; createdAt?: string; extraData?: string; isRead?: number; readAt?: string; related?: { positionId?: string; positionName?: string; resumeId?: string; scheduleId?: string; talentName?: string; }; title?: string; type?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultNotification = await client.v1.seeker.notifications.list();\n\nconsole.log(resultPageResultNotification);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/notifications \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.notifications.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultNotification = await client.v1.seeker.notifications.list();\n\nconsole.log(resultPageResultNotification.code);",
      },
    },
  },
  {
    name: 'retrieve_stats',
    endpoint: '/api/v1/seeker/notifications/stats',
    httpMethod: 'get',
    summary: '获取通知统计',
    description: '获取通知统计数据',
    stainlessPath: '(resource) v1.seeker.notifications > (method) retrieve_stats',
    qualified: 'client.v1.seeker.notifications.retrieveStats',
    response:
      '{ code?: number; data?: { interviewRemind?: number; resumeNew?: number; systemNotice?: number; total?: number; unread?: number; }; message?: string; }',
    markdown:
      "## retrieve_stats\n\n`client.v1.seeker.notifications.retrieveStats(): { code?: number; data?: notification_stats_response; message?: string; }`\n\n**get** `/api/v1/seeker/notifications/stats`\n\n获取通知统计数据\n\n### Returns\n\n- `{ code?: number; data?: { interviewRemind?: number; resumeNew?: number; systemNotice?: number; total?: number; unread?: number; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { interviewRemind?: number; resumeNew?: number; systemNotice?: number; total?: number; unread?: number; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultNotificationStats = await client.v1.seeker.notifications.retrieveStats();\n\nconsole.log(resultNotificationStats);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/notifications/stats \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.notifications.retrieveStats',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultNotificationStats = await client.v1.seeker.notifications.retrieveStats();\n\nconsole.log(resultNotificationStats.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/seeker/notifications/{notificationId}',
    httpMethod: 'delete',
    summary: '删除通知',
    description: '删除通知',
    stainlessPath: '(resource) v1.seeker.notifications > (method) delete',
    qualified: 'client.v1.seeker.notifications.delete',
    params: ['notificationId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.seeker.notifications.delete(notificationId: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/seeker/notifications/{notificationId}`\n\n删除通知\n\n### Parameters\n\n- `notificationId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.notifications.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/notifications/$NOTIFICATION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.notifications.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.notifications.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'image',
    endpoint: '/api/v1/seeker/files/image',
    httpMethod: 'post',
    summary: '上传图片',
    description: '上传图片文件，支持 JPG、PNG、GIF、WebP',
    stainlessPath: '(resource) v1.seeker.files > (method) image',
    qualified: 'client.v1.seeker.files.image',
    params: ['file: string;', 'type?: string;'],
    response:
      '{ code?: number; data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }; message?: string; }',
    markdown:
      "## image\n\n`client.v1.seeker.files.image(file: string, type?: string): { code?: number; data?: upload_response; message?: string; }`\n\n**post** `/api/v1/seeker/files/image`\n\n上传图片文件，支持 JPG、PNG、GIF、WebP\n\n### Parameters\n\n- `file: string`\n  图片文件\n\n- `type?: string`\n  类型: avatar/logo/license/screenshot\n\n### Returns\n\n- `{ code?: number; data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultUpload = await client.v1.seeker.files.image({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultUpload);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/v1/seeker/files/image \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.v1.seeker.files.image',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultUpload = await client.v1.seeker.files.image({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultUpload.code);",
      },
    },
  },
  {
    name: 'file',
    endpoint: '/api/v1/seeker/files/file',
    httpMethod: 'post',
    summary: '上传文件',
    description: '上传普通文件',
    stainlessPath: '(resource) v1.seeker.files > (method) file',
    qualified: 'client.v1.seeker.files.file',
    params: ['file: string;'],
    response:
      '{ code?: number; data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }; message?: string; }',
    markdown:
      "## file\n\n`client.v1.seeker.files.file(file: string): { code?: number; data?: upload_response; message?: string; }`\n\n**post** `/api/v1/seeker/files/file`\n\n上传普通文件\n\n### Parameters\n\n- `file: string`\n  文件\n\n### Returns\n\n- `{ code?: number; data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultUpload = await client.v1.seeker.files.file({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultUpload);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/v1/seeker/files/file \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.v1.seeker.files.file',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultUpload = await client.v1.seeker.files.file({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultUpload.code);",
      },
    },
  },
  {
    name: 'register',
    endpoint: '/api/v1/seeker/auth/register',
    httpMethod: 'post',
    summary: '用户注册',
    description: '新用户注册',
    stainlessPath: '(resource) v1.seeker.auth > (method) register',
    qualified: 'client.v1.seeker.auth.register',
    params: ['code: string;', 'name: string;', 'password: string;', 'phone: string;'],
    response:
      '{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }',
    markdown:
      "## register\n\n`client.v1.seeker.auth.register(code: string, name: string, password: string, phone: string): { code?: number; data?: login_response; message?: string; }`\n\n**post** `/api/v1/seeker/auth/register`\n\n新用户注册\n\n### Parameters\n\n- `code: string`\n  短信验证码\n\n- `name: string`\n  姓名\n\n- `password: string`\n  密码\n\n- `phone: string`\n  手机号\n\n### Returns\n\n- `{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: { id?: string; name?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultLogin = await client.v1.seeker.auth.register({\n  code: '1234',\n  name: '张三',\n  password: 'password123',\n  phone: '13800138000',\n});\n\nconsole.log(resultLogin);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/auth/register \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "code": "1234",\n          "name": "张三",\n          "password": "password123",\n          "phone": "13800138000"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.auth.register',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultLogin = await client.v1.seeker.auth.register({\n  code: '1234',\n  name: '张三',\n  password: 'password123',\n  phone: '13800138000',\n});\n\nconsole.log(resultLogin.code);",
      },
    },
  },
  {
    name: 'refresh',
    endpoint: '/api/v1/seeker/auth/refresh',
    httpMethod: 'post',
    summary: '刷新Token（别名）',
    description: '兼容 /refresh 路径',
    stainlessPath: '(resource) v1.seeker.auth > (method) refresh',
    qualified: 'client.v1.seeker.auth.refresh',
    params: ['refreshToken: string;'],
    response:
      '{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }',
    markdown:
      "## refresh\n\n`client.v1.seeker.auth.refresh(refreshToken: string): { code?: number; data?: login_response; message?: string; }`\n\n**post** `/api/v1/seeker/auth/refresh`\n\n兼容 /refresh 路径\n\n### Parameters\n\n- `refreshToken: string`\n  刷新令牌\n\n### Returns\n\n- `{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: { id?: string; name?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultLogin = await client.v1.seeker.auth.refresh({ refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' });\n\nconsole.log(resultLogin);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/auth/refresh \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.auth.refresh',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultLogin = await client.v1.seeker.auth.refresh({\n  refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',\n});\n\nconsole.log(resultLogin.code);",
      },
    },
  },
  {
    name: 'logout',
    endpoint: '/api/v1/seeker/auth/logout',
    httpMethod: 'post',
    summary: '退出登录',
    description: '用户退出登录',
    stainlessPath: '(resource) v1.seeker.auth > (method) logout',
    qualified: 'client.v1.seeker.auth.logout',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## logout\n\n`client.v1.seeker.auth.logout(): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/seeker/auth/logout`\n\n用户退出登录\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.auth.logout();\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/auth/logout \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.auth.logout',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.auth.logout();\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'refresh',
    endpoint: '/api/v1/seeker/auth/token/refresh',
    httpMethod: 'post',
    summary: '刷新Token',
    description: '使用刷新令牌获取新的访问令牌',
    stainlessPath: '(resource) v1.seeker.auth.token > (method) refresh',
    qualified: 'client.v1.seeker.auth.token.refresh',
    params: ['refreshToken: string;'],
    response:
      '{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }',
    markdown:
      "## refresh\n\n`client.v1.seeker.auth.token.refresh(refreshToken: string): { code?: number; data?: login_response; message?: string; }`\n\n**post** `/api/v1/seeker/auth/token/refresh`\n\n使用刷新令牌获取新的访问令牌\n\n### Parameters\n\n- `refreshToken: string`\n  刷新令牌\n\n### Returns\n\n- `{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: { id?: string; name?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultLogin = await client.v1.seeker.auth.token.refresh({ refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' });\n\nconsole.log(resultLogin);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/auth/token/refresh \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.auth.token.refresh',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultLogin = await client.v1.seeker.auth.token.refresh({\n  refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',\n});\n\nconsole.log(resultLogin.code);",
      },
    },
  },
  {
    name: 'send',
    endpoint: '/api/v1/seeker/auth/sms/send',
    httpMethod: 'post',
    summary: '发送短信验证码',
    description: '发送短信验证码到指定手机号',
    stainlessPath: '(resource) v1.seeker.auth.sms > (method) send',
    qualified: 'client.v1.seeker.auth.sms.send',
    params: ['phone: string;', "type: 'login,register,reset_password';"],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## send\n\n`client.v1.seeker.auth.sms.send(phone: string, type: 'login,register,reset_password'): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/seeker/auth/sms/send`\n\n发送短信验证码到指定手机号\n\n### Parameters\n\n- `phone: string`\n  手机号\n\n- `type: 'login,register,reset_password'`\n  验证码类型\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.seeker.auth.sms.send({ phone: '13800138000', type: 'login,register,reset_password' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/auth/sms/send \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "phone": "13800138000",\n          "type": "login,register,reset_password"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.auth.sms.send',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.seeker.auth.sms.send({\n  phone: '13800138000',\n  type: 'login,register,reset_password',\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'login',
    endpoint: '/api/v1/seeker/auth/sms/login',
    httpMethod: 'post',
    summary: '短信验证码登录（别名）',
    description: '兼容 /sms/login 路径',
    stainlessPath: '(resource) v1.seeker.auth.sms > (method) login',
    qualified: 'client.v1.seeker.auth.sms.login',
    params: ['password: string;', 'phone: string;'],
    response:
      '{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }',
    markdown:
      "## login\n\n`client.v1.seeker.auth.sms.login(password: string, phone: string): { code?: number; data?: login_response; message?: string; }`\n\n**post** `/api/v1/seeker/auth/sms/login`\n\n兼容 /sms/login 路径\n\n### Parameters\n\n- `password: string`\n  密码（短信登录时传验证码）\n\n- `phone: string`\n  手机号\n\n### Returns\n\n- `{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: { id?: string; name?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultLogin = await client.v1.seeker.auth.sms.login({ password: 'password123', phone: '13800138000' });\n\nconsole.log(resultLogin);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/auth/sms/login \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "password": "password123",\n          "phone": "13800138000"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.auth.sms.login',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultLogin = await client.v1.seeker.auth.sms.login({\n  password: 'password123',\n  phone: '13800138000',\n});\n\nconsole.log(resultLogin.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/seeker/auth/login',
    httpMethod: 'post',
    summary: '密码登录',
    description: '使用手机号和密码进行登录',
    stainlessPath: '(resource) v1.seeker.auth.seeker_login > (method) create',
    qualified: 'client.v1.seeker.auth.seekerLogin.create',
    params: ['password: string;', 'phone: string;'],
    response:
      '{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }',
    markdown:
      "## create\n\n`client.v1.seeker.auth.seekerLogin.create(password: string, phone: string): { code?: number; data?: login_response; message?: string; }`\n\n**post** `/api/v1/seeker/auth/login`\n\n使用手机号和密码进行登录\n\n### Parameters\n\n- `password: string`\n  密码（短信登录时传验证码）\n\n- `phone: string`\n  手机号\n\n### Returns\n\n- `{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: { id?: string; name?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultLogin = await client.v1.seeker.auth.seekerLogin.create({ password: 'password123', phone: '13800138000' });\n\nconsole.log(resultLogin);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/auth/login \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "password": "password123",\n          "phone": "13800138000"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.auth.seekerLogin.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultLogin = await client.v1.seeker.auth.seekerLogin.create({\n  password: 'password123',\n  phone: '13800138000',\n});\n\nconsole.log(resultLogin.code);",
      },
    },
  },
  {
    name: 'sms',
    endpoint: '/api/v1/seeker/auth/login/sms',
    httpMethod: 'post',
    summary: '短信验证码登录',
    description: '使用手机号和短信验证码进行登录',
    stainlessPath: '(resource) v1.seeker.auth.seeker_login > (method) sms',
    qualified: 'client.v1.seeker.auth.seekerLogin.sms',
    params: ['password: string;', 'phone: string;'],
    response:
      '{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }',
    markdown:
      "## sms\n\n`client.v1.seeker.auth.seekerLogin.sms(password: string, phone: string): { code?: number; data?: login_response; message?: string; }`\n\n**post** `/api/v1/seeker/auth/login/sms`\n\n使用手机号和短信验证码进行登录\n\n### Parameters\n\n- `password: string`\n  密码（短信登录时传验证码）\n\n- `phone: string`\n  手机号\n\n### Returns\n\n- `{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: { id?: string; name?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultLogin = await client.v1.seeker.auth.seekerLogin.sms({ password: 'password123', phone: '13800138000' });\n\nconsole.log(resultLogin);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/auth/login/sms \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "password": "password123",\n          "phone": "13800138000"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.auth.seekerLogin.sms',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultLogin = await client.v1.seeker.auth.seekerLogin.sms({\n  password: 'password123',\n  phone: '13800138000',\n});\n\nconsole.log(resultLogin.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/seeker/applications',
    httpMethod: 'get',
    summary: '获取投递记录列表',
    description: '分页获取当前求职者的所有投递记录',
    stainlessPath: '(resource) v1.seeker.applications > (method) list',
    qualified: 'client.v1.seeker.applications.list',
    params: ['page?: number;', 'pageSize?: number;', 'status?: string;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: object; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.seeker.applications.list(page?: number, pageSize?: number, status?: string): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/seeker/applications`\n\n分页获取当前求职者的所有投递记录\n\n### Parameters\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页数量，默认20\n\n- `status?: string`\n  状态筛选：pending/interviewing/offer/rejected\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: object; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; appliedAt?: string; companyId?: string; companyLogo?: string; companyName?: string; jobId?: string; jobTitle?: string; status?: string; statusText?: string; updatedAt?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst applicationListResponse = await client.v1.seeker.applications.list();\n\nconsole.log(applicationListResponse);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/applications \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.applications.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst applicationListResponse = await client.v1.seeker.applications.list();\n\nconsole.log(applicationListResponse.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/seeker/applications',
    httpMethod: 'post',
    summary: '投递简历',
    description: '向指定职位投递简历',
    stainlessPath: '(resource) v1.seeker.applications > (method) create',
    qualified: 'client.v1.seeker.applications.create',
    params: ['jobId: number;', 'coverLetter?: string;', 'resumeId?: number;'],
    response:
      '{ code?: number; data?: { id?: string; appliedAt?: string; companyId?: string; companyLogo?: string; companyName?: string; jobId?: string; jobTitle?: string; status?: string; statusText?: string; updatedAt?: string; }; message?: string; }',
    markdown:
      "## create\n\n`client.v1.seeker.applications.create(jobId: number, coverLetter?: string, resumeId?: number): { code?: number; data?: application_list_response; message?: string; }`\n\n**post** `/api/v1/seeker/applications`\n\n向指定职位投递简历\n\n### Parameters\n\n- `jobId: number`\n  职位ID\n\n- `coverLetter?: string`\n  求职信\n\n- `resumeId?: number`\n  简历ID（不传则使用默认简历）\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; appliedAt?: string; companyId?: string; companyLogo?: string; companyName?: string; jobId?: string; jobTitle?: string; status?: string; statusText?: string; updatedAt?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; appliedAt?: string; companyId?: string; companyLogo?: string; companyName?: string; jobId?: string; jobTitle?: string; status?: string; statusText?: string; updatedAt?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst application = await client.v1.seeker.applications.create({ jobId: 0 });\n\nconsole.log(application);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/applications \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "jobId": 0\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.applications.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst application = await client.v1.seeker.applications.create({ jobId: 0 });\n\nconsole.log(application.code);",
      },
    },
  },
  {
    name: 'update_mark_unsuitable',
    endpoint: '/api/v1/seeker/applications/{id}/mark-unsuitable',
    httpMethod: 'patch',
    summary: '标记不合适',
    description: '求职者主动标记职位为不合适',
    stainlessPath: '(resource) v1.seeker.applications > (method) update_mark_unsuitable',
    qualified: 'client.v1.seeker.applications.updateMarkUnsuitable',
    params: ['id: number;', 'reason: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_mark_unsuitable\n\n`client.v1.seeker.applications.updateMarkUnsuitable(id: number, reason: string): { code?: number; data?: object; message?: string; }`\n\n**patch** `/api/v1/seeker/applications/{id}/mark-unsuitable`\n\n求职者主动标记职位为不合适\n\n### Parameters\n\n- `id: number`\n\n- `reason: string`\n  不合适原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.applications.updateMarkUnsuitable(0, { reason: 'reason' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/applications/$ID/mark-unsuitable \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "reason": "reason"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.applications.updateMarkUnsuitable',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.applications.updateMarkUnsuitable(0, {\n  reason: 'reason',\n});\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/seeker/applications/{id}',
    httpMethod: 'get',
    summary: '获取投递详情',
    description: '获取指定投递记录的详细信息，包含状态时间线',
    stainlessPath: '(resource) v1.seeker.applications > (method) retrieve',
    qualified: 'client.v1.seeker.applications.retrieve',
    params: ['id: number;'],
    response:
      '{ code?: number; data?: { id?: string; appliedAt?: string; job?: { id?: string; city?: string; companyName?: string; salary?: string; title?: string; }; status?: string; statusText?: string; timeline?: object[]; updatedAt?: string; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.seeker.applications.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/seeker/applications/{id}`\n\n获取指定投递记录的详细信息，包含状态时间线\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; appliedAt?: string; job?: { id?: string; city?: string; companyName?: string; salary?: string; title?: string; }; status?: string; statusText?: string; timeline?: object[]; updatedAt?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; appliedAt?: string; job?: { id?: string; city?: string; companyName?: string; salary?: string; title?: string; }; status?: string; statusText?: string; timeline?: { description?: string; status?: string; statusText?: string; time?: string; }[]; updatedAt?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst application = await client.v1.seeker.applications.retrieve(0);\n\nconsole.log(application);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/applications/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.applications.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst application = await client.v1.seeker.applications.retrieve(0);\n\nconsole.log(application.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/seeker/applications/{id}',
    httpMethod: 'delete',
    summary: '撤回投递',
    description: '撤回指定投递（仅在未处理状态下可撤回）',
    stainlessPath: '(resource) v1.seeker.applications > (method) delete',
    qualified: 'client.v1.seeker.applications.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.seeker.applications.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/seeker/applications/{id}`\n\n撤回指定投递（仅在未处理状态下可撤回）\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.seeker.applications.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/applications/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.applications.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.seeker.applications.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'retrieve_statistics',
    endpoint: '/api/v1/seeker/applications/statistics',
    httpMethod: 'get',
    summary: '获取投递统计',
    description: '获取投递记录的统计信息',
    stainlessPath: '(resource) v1.seeker.applications > (method) retrieve_statistics',
    qualified: 'client.v1.seeker.applications.retrieveStatistics',
    response:
      '{ code?: number; data?: { interviewing?: number; offer?: number; pending?: number; rejected?: number; total?: number; }; message?: string; }',
    markdown:
      "## retrieve_statistics\n\n`client.v1.seeker.applications.retrieveStatistics(): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/seeker/applications/statistics`\n\n获取投递记录的统计信息\n\n### Returns\n\n- `{ code?: number; data?: { interviewing?: number; offer?: number; pending?: number; rejected?: number; total?: number; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { interviewing?: number; offer?: number; pending?: number; rejected?: number; total?: number; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst response = await client.v1.seeker.applications.retrieveStatistics();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/applications/statistics \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.applications.retrieveStatistics',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.seeker.applications.retrieveStatistics();\n\nconsole.log(response.code);",
      },
    },
  },
  {
    name: 'risk_analysis',
    endpoint: '/api/v1/seeker/ai-assistant/risk-analysis',
    httpMethod: 'post',
    summary: '职位风险分析',
    description: '分析投递职位的风险等级',
    stainlessPath: '(resource) v1.seeker.ai_assistant > (method) risk_analysis',
    qualified: 'client.v1.seeker.aiAssistant.riskAnalysis',
    params: ['jobId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## risk_analysis\n\n`client.v1.seeker.aiAssistant.riskAnalysis(jobId: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/seeker/ai-assistant/risk-analysis`\n\n分析投递职位的风险等级\n\n### Parameters\n\n- `jobId: number`\n  职位ID\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.seeker.aiAssistant.riskAnalysis({ jobId: 0 });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/ai-assistant/risk-analysis \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "jobId": 0\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.aiAssistant.riskAnalysis',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.seeker.aiAssistant.riskAnalysis({ jobId: 0 });\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'jd_optimize',
    endpoint: '/api/v1/seeker/ai-assistant/jd-optimize',
    httpMethod: 'post',
    summary: 'JD优化分析',
    description: '分析职位与简历的匹配度，给出优化建议',
    stainlessPath: '(resource) v1.seeker.ai_assistant > (method) jd_optimize',
    qualified: 'client.v1.seeker.aiAssistant.jdOptimize',
    params: ['jobId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## jd_optimize\n\n`client.v1.seeker.aiAssistant.jdOptimize(jobId: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/seeker/ai-assistant/jd-optimize`\n\n分析职位与简历的匹配度，给出优化建议\n\n### Parameters\n\n- `jobId: number`\n  职位ID\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.seeker.aiAssistant.jdOptimize({ jobId: 0 });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/ai-assistant/jd-optimize \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "jobId": 0\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.aiAssistant.jdOptimize',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.seeker.aiAssistant.jdOptimize({ jobId: 0 });\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve_analytics',
    endpoint: '/api/v1/seeker/ai-assistant/analytics',
    httpMethod: 'get',
    summary: '获取求职数据分析',
    description: '获取求职漏斗、转化率、建议等数据分析',
    stainlessPath: '(resource) v1.seeker.ai_assistant > (method) retrieve_analytics',
    qualified: 'client.v1.seeker.aiAssistant.retrieveAnalytics',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve_analytics\n\n`client.v1.seeker.aiAssistant.retrieveAnalytics(): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/seeker/ai-assistant/analytics`\n\n获取求职漏斗、转化率、建议等数据分析\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.seeker.aiAssistant.retrieveAnalytics();\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/ai-assistant/analytics \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.aiAssistant.retrieveAnalytics',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.seeker.aiAssistant.retrieveAnalytics();\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/seeker/ai-assistant/messages',
    httpMethod: 'get',
    summary: '获取AI对话历史',
    description: '获取与AI助理的对话历史',
    stainlessPath: '(resource) v1.seeker.ai_assistant.messages > (method) list',
    qualified: 'client.v1.seeker.aiAssistant.messages.list',
    params: ['page?: number;', 'pageSize?: number;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.seeker.aiAssistant.messages.list(page?: number, pageSize?: number): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/v1/seeker/ai-assistant/messages`\n\n获取与AI助理的对话历史\n\n### Parameters\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页数量，默认50\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.v1.seeker.aiAssistant.messages.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/ai-assistant/messages \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.aiAssistant.messages.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.v1.seeker.aiAssistant.messages.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/seeker/ai-assistant/messages',
    httpMethod: 'post',
    summary: '发送消息给AI',
    description: '向AI助理发送消息并获取回复',
    stainlessPath: '(resource) v1.seeker.ai_assistant.messages > (method) create',
    qualified: 'client.v1.seeker.aiAssistant.messages.create',
    params: ['content: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## create\n\n`client.v1.seeker.aiAssistant.messages.create(content: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/seeker/ai-assistant/messages`\n\n向AI助理发送消息并获取回复\n\n### Parameters\n\n- `content: string`\n  消息内容\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.seeker.aiAssistant.messages.create({ content: 'content' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/ai-assistant/messages \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "content": "content"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.aiAssistant.messages.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.seeker.aiAssistant.messages.create({\n  content: 'content',\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update_confirm',
    endpoint: '/api/v1/seeker/schedules/{id}/confirm',
    httpMethod: 'patch',
    summary: '确认参加面试',
    description: '确认参加指定的面试日程',
    stainlessPath: '(resource) v1.seeker.schedules > (method) update_confirm',
    qualified: 'client.v1.seeker.schedules.updateConfirm',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_confirm\n\n`client.v1.seeker.schedules.updateConfirm(id: number): { code?: number; data?: object; message?: string; }`\n\n**patch** `/api/v1/seeker/schedules/{id}/confirm`\n\n确认参加指定的面试日程\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.seeker.schedules.updateConfirm(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/schedules/$ID/confirm \\\n    -X PATCH \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.schedules.updateConfirm',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.seeker.schedules.updateConfirm(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update_cancel',
    endpoint: '/api/v1/seeker/schedules/{id}/cancel',
    httpMethod: 'patch',
    summary: '取消面试',
    description: '求职者主动取消面试',
    stainlessPath: '(resource) v1.seeker.schedules > (method) update_cancel',
    qualified: 'client.v1.seeker.schedules.updateCancel',
    params: ['id: number;', 'reason: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_cancel\n\n`client.v1.seeker.schedules.updateCancel(id: number, reason: string): { code?: number; data?: object; message?: string; }`\n\n**patch** `/api/v1/seeker/schedules/{id}/cancel`\n\n求职者主动取消面试\n\n### Parameters\n\n- `id: number`\n\n- `reason: string`\n  取消原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.seeker.schedules.updateCancel(0, { reason: 'reason' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/schedules/$ID/cancel \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "reason": "reason"\n        }\'',
      },
      typescript: {
        method: 'client.v1.seeker.schedules.updateCancel',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.seeker.schedules.updateCancel(0, {\n  reason: 'reason',\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/seeker/schedules',
    httpMethod: 'get',
    summary: '获取日程列表',
    description: '分页获取当前求职者的面试日程',
    stainlessPath: '(resource) v1.seeker.schedules > (method) list',
    qualified: 'client.v1.seeker.schedules.list',
    params: [
      'endDate?: string;',
      'page?: number;',
      'pageSize?: number;',
      'startDate?: string;',
      'status?: string;',
    ],
    response:
      '{ code?: number; data?: { list?: { id?: string; companyName?: string; jobTitle?: string; round?: string; scheduledAt?: string; status?: string; type?: string; }[]; pagination?: object; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.seeker.schedules.list(endDate?: string, page?: number, pageSize?: number, startDate?: string, status?: string): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/seeker/schedules`\n\n分页获取当前求职者的面试日程\n\n### Parameters\n\n- `endDate?: string`\n  结束日期(YYYY-MM-DD)\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页数量，默认20\n\n- `startDate?: string`\n  开始日期(YYYY-MM-DD)\n\n- `status?: string`\n  状态筛选：pending/confirmed/completed/cancelled\n\n### Returns\n\n- `{ code?: number; data?: { list?: { id?: string; companyName?: string; jobTitle?: string; round?: string; scheduledAt?: string; status?: string; type?: string; }[]; pagination?: object; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; companyName?: string; jobTitle?: string; round?: string; scheduledAt?: string; status?: string; type?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageScheduleList = await client.v1.seeker.schedules.list();\n\nconsole.log(resultPageScheduleList);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/schedules \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.schedules.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageScheduleList = await client.v1.seeker.schedules.list();\n\nconsole.log(resultPageScheduleList.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/seeker/schedules/{id}',
    httpMethod: 'get',
    summary: '获取日程详情',
    description: '获取指定面试日程的详细信息',
    stainlessPath: '(resource) v1.seeker.schedules > (method) retrieve',
    qualified: 'client.v1.seeker.schedules.retrieve',
    params: ['id: number;'],
    response:
      '{ code?: number; data?: { id?: string; createdAt?: string; createdBy?: user_info; description?: string; endTime?: string; feedbacks?: feedback_info[]; interviewers?: interviewer_info[]; location?: string; meetingLink?: string; meetingRoom?: string; position?: position_info; resumeId?: string; round?: string; startTime?: string; status?: string; talent?: talent_info; title?: string; type?: string; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.seeker.schedules.retrieve(id: number): { code?: number; data?: schedule_detail_response; message?: string; }`\n\n**get** `/api/v1/seeker/schedules/{id}`\n\n获取指定面试日程的详细信息\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; createdAt?: string; createdBy?: user_info; description?: string; endTime?: string; feedbacks?: feedback_info[]; interviewers?: interviewer_info[]; location?: string; meetingLink?: string; meetingRoom?: string; position?: position_info; resumeId?: string; round?: string; startTime?: string; status?: string; talent?: talent_info; title?: string; type?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; createdAt?: string; createdBy?: { id?: string; name?: string; }; description?: string; endTime?: string; feedbacks?: { id?: string; content?: string; createdAt?: string; result?: string; userId?: string; userName?: string; }[]; interviewers?: { id?: string; avatar?: string; hasFeedback?: boolean; isMain?: boolean; name?: string; }[]; location?: string; meetingLink?: string; meetingRoom?: string; position?: { id?: string; name?: string; }; resumeId?: string; round?: string; startTime?: string; status?: string; talent?: { id?: string; avatar?: string; name?: string; targetPosition?: string; }; title?: string; type?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultScheduleDetail = await client.v1.seeker.schedules.retrieve(0);\n\nconsole.log(resultScheduleDetail);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/schedules/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.schedules.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultScheduleDetail = await client.v1.seeker.schedules.retrieve(0);\n\nconsole.log(resultScheduleDetail.code);",
      },
    },
  },
  {
    name: 'retrieve_suggestions',
    endpoint: '/api/v1/seeker/skills/suggestions',
    httpMethod: 'get',
    summary: '获取职位推荐技能',
    description: '根据职位名称获取推荐技能标签',
    stainlessPath: '(resource) v1.seeker.skills > (method) retrieve_suggestions',
    qualified: 'client.v1.seeker.skills.retrieveSuggestions',
    params: ['position: string;'],
    response: '{ code?: number; data?: { position?: string; skills?: string[]; }; message?: string; }',
    markdown:
      "## retrieve_suggestions\n\n`client.v1.seeker.skills.retrieveSuggestions(position: string): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/seeker/skills/suggestions`\n\n根据职位名称获取推荐技能标签\n\n### Parameters\n\n- `position: string`\n  职位名称\n\n### Returns\n\n- `{ code?: number; data?: { position?: string; skills?: string[]; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { position?: string; skills?: string[]; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst response = await client.v1.seeker.skills.retrieveSuggestions({ position: 'position' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/skills/suggestions \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.skills.retrieveSuggestions',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.seeker.skills.retrieveSuggestions({ position: 'position' });\n\nconsole.log(response.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/seeker/lookups/regions/provinces',
    httpMethod: 'get',
    summary: '获取省份列表',
    description: '获取省份列表',
    stainlessPath: '(resource) v1.seeker.lookups.regions.provinces > (method) list',
    qualified: 'client.v1.seeker.lookups.regions.provinces.list',
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## list\n\n`client.v1.seeker.lookups.regions.provinces.list(): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/v1/seeker/lookups/regions/provinces`\n\n获取省份列表\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.v1.seeker.lookups.regions.provinces.list();\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/lookups/regions/provinces \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.lookups.regions.provinces.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.v1.seeker.lookups.regions.provinces.list();\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'retrieve_cities',
    endpoint: '/api/v1/seeker/lookups/regions/provinces/{provinceCode}/cities',
    httpMethod: 'get',
    summary: '获取城市列表',
    description: '获取城市列表',
    stainlessPath: '(resource) v1.seeker.lookups.regions.provinces > (method) retrieve_cities',
    qualified: 'client.v1.seeker.lookups.regions.provinces.retrieveCities',
    params: ['provinceCode: string;'],
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## retrieve_cities\n\n`client.v1.seeker.lookups.regions.provinces.retrieveCities(provinceCode: string): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/v1/seeker/lookups/regions/provinces/{provinceCode}/cities`\n\n获取城市列表\n\n### Parameters\n\n- `provinceCode: string`\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.v1.seeker.lookups.regions.provinces.retrieveCities('provinceCode');\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/lookups/regions/provinces/$PROVINCE_CODE/cities \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.lookups.regions.provinces.retrieveCities',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.v1.seeker.lookups.regions.provinces.retrieveCities(\n  'provinceCode',\n);\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'retrieve_schools',
    endpoint: '/api/v1/seeker/lookups/autocomplete/schools',
    httpMethod: 'get',
    summary: '搜索学校',
    description: '搜索学校',
    stainlessPath: '(resource) v1.seeker.lookups.autocomplete > (method) retrieve_schools',
    qualified: 'client.v1.seeker.lookups.autocomplete.retrieveSchools',
    params: ['keyword: string;', 'limit?: number;'],
    response: '{ code?: number; data?: string[]; message?: string; }',
    markdown:
      "## retrieve_schools\n\n`client.v1.seeker.lookups.autocomplete.retrieveSchools(keyword: string, limit?: number): { code?: number; data?: string[]; message?: string; }`\n\n**get** `/api/v1/seeker/lookups/autocomplete/schools`\n\n搜索学校\n\n### Parameters\n\n- `keyword: string`\n  关键词\n\n- `limit?: number`\n\n### Returns\n\n- `{ code?: number; data?: string[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: string[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListString = await client.v1.seeker.lookups.autocomplete.retrieveSchools({ keyword: 'keyword' });\n\nconsole.log(resultListString);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/lookups/autocomplete/schools \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.lookups.autocomplete.retrieveSchools',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListString = await client.v1.seeker.lookups.autocomplete.retrieveSchools({\n  keyword: 'keyword',\n});\n\nconsole.log(resultListString.code);",
      },
    },
  },
  {
    name: 'retrieve_positions',
    endpoint: '/api/v1/seeker/lookups/autocomplete/positions',
    httpMethod: 'get',
    summary: '搜索职位',
    description: '搜索职位',
    stainlessPath: '(resource) v1.seeker.lookups.autocomplete > (method) retrieve_positions',
    qualified: 'client.v1.seeker.lookups.autocomplete.retrievePositions',
    params: ['keyword: string;', 'limit?: number;'],
    response: '{ code?: number; data?: string[]; message?: string; }',
    markdown:
      "## retrieve_positions\n\n`client.v1.seeker.lookups.autocomplete.retrievePositions(keyword: string, limit?: number): { code?: number; data?: string[]; message?: string; }`\n\n**get** `/api/v1/seeker/lookups/autocomplete/positions`\n\n搜索职位\n\n### Parameters\n\n- `keyword: string`\n  关键词\n\n- `limit?: number`\n\n### Returns\n\n- `{ code?: number; data?: string[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: string[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListString = await client.v1.seeker.lookups.autocomplete.retrievePositions({ keyword: 'keyword' });\n\nconsole.log(resultListString);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/lookups/autocomplete/positions \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.lookups.autocomplete.retrievePositions',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListString = await client.v1.seeker.lookups.autocomplete.retrievePositions({\n  keyword: 'keyword',\n});\n\nconsole.log(resultListString.code);",
      },
    },
  },
  {
    name: 'retrieve_majors',
    endpoint: '/api/v1/seeker/lookups/autocomplete/majors',
    httpMethod: 'get',
    summary: '搜索专业',
    description: '搜索专业',
    stainlessPath: '(resource) v1.seeker.lookups.autocomplete > (method) retrieve_majors',
    qualified: 'client.v1.seeker.lookups.autocomplete.retrieveMajors',
    params: ['keyword: string;', 'limit?: number;'],
    response: '{ code?: number; data?: string[]; message?: string; }',
    markdown:
      "## retrieve_majors\n\n`client.v1.seeker.lookups.autocomplete.retrieveMajors(keyword: string, limit?: number): { code?: number; data?: string[]; message?: string; }`\n\n**get** `/api/v1/seeker/lookups/autocomplete/majors`\n\n搜索专业\n\n### Parameters\n\n- `keyword: string`\n  关键词\n\n- `limit?: number`\n\n### Returns\n\n- `{ code?: number; data?: string[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: string[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListString = await client.v1.seeker.lookups.autocomplete.retrieveMajors({ keyword: 'keyword' });\n\nconsole.log(resultListString);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/lookups/autocomplete/majors \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.lookups.autocomplete.retrieveMajors',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListString = await client.v1.seeker.lookups.autocomplete.retrieveMajors({\n  keyword: 'keyword',\n});\n\nconsole.log(resultListString.code);",
      },
    },
  },
  {
    name: 'retrieve_companies',
    endpoint: '/api/v1/seeker/lookups/autocomplete/companies',
    httpMethod: 'get',
    summary: '搜索公司',
    description: '搜索公司',
    stainlessPath: '(resource) v1.seeker.lookups.autocomplete > (method) retrieve_companies',
    qualified: 'client.v1.seeker.lookups.autocomplete.retrieveCompanies',
    params: ['keyword: string;', 'limit?: number;'],
    response: '{ code?: number; data?: string[]; message?: string; }',
    markdown:
      "## retrieve_companies\n\n`client.v1.seeker.lookups.autocomplete.retrieveCompanies(keyword: string, limit?: number): { code?: number; data?: string[]; message?: string; }`\n\n**get** `/api/v1/seeker/lookups/autocomplete/companies`\n\n搜索公司\n\n### Parameters\n\n- `keyword: string`\n  关键词\n\n- `limit?: number`\n\n### Returns\n\n- `{ code?: number; data?: string[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: string[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListString = await client.v1.seeker.lookups.autocomplete.retrieveCompanies({ keyword: 'keyword' });\n\nconsole.log(resultListString);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/lookups/autocomplete/companies \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.lookups.autocomplete.retrieveCompanies',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListString = await client.v1.seeker.lookups.autocomplete.retrieveCompanies({\n  keyword: 'keyword',\n});\n\nconsole.log(resultListString.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/seeker/jobs',
    httpMethod: 'get',
    summary: '获取职位列表',
    description: '分页搜索职位，支持关键词、城市、薪资等筛选',
    stainlessPath: '(resource) v1.seeker.jobs > (method) list',
    qualified: 'client.v1.seeker.jobs.list',
    params: [
      'request: { category?: string; city?: string; education?: string; experience?: string; jobType?: string; keyword?: string; offset?: number; page?: number; pageSize?: number; salaryMax?: number; salaryMin?: number; sortBy?: string; };',
    ],
    response: '{ code?: number; data?: { list?: object[]; pagination?: object; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.seeker.jobs.list(request: { category?: string; city?: string; education?: string; experience?: string; jobType?: string; keyword?: string; offset?: number; page?: number; pageSize?: number; salaryMax?: number; salaryMin?: number; sortBy?: string; }): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/seeker/jobs`\n\n分页搜索职位，支持关键词、城市、薪资等筛选\n\n### Parameters\n\n- `request: { category?: string; city?: string; education?: string; experience?: string; jobType?: string; keyword?: string; offset?: number; page?: number; pageSize?: number; salaryMax?: number; salaryMin?: number; sortBy?: string; }`\n  职位搜索请求\n  - `category?: string`\n    职位分类\n  - `city?: string`\n    城市\n  - `education?: string`\n    学历要求\n  - `experience?: string`\n    经验要求\n  - `jobType?: string`\n    工作类型\n  - `keyword?: string`\n    搜索关键词（职位名称/公司名称）\n  - `offset?: number`\n  - `page?: number`\n    页码，默认1\n  - `pageSize?: number`\n    每页数量，默认20\n  - `salaryMax?: number`\n    最高薪资(K)\n  - `salaryMin?: number`\n    最低薪资(K)\n  - `sortBy?: string`\n    排序字段：latest/salary/match\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: object; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; city?: string; company?: object; district?: string; education?: string; experience?: string; publishedAt?: string; salary?: string; tags?: string[]; title?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst jobListResponse = await client.v1.seeker.jobs.list({ request: {} });\n\nconsole.log(jobListResponse);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/jobs \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.jobs.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst jobListResponse = await client.v1.seeker.jobs.list({ request: {} });\n\nconsole.log(jobListResponse.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/seeker/jobs/{jobId}',
    httpMethod: 'get',
    summary: '获取职位详情',
    description: '获取指定职位的详细信息，包含公司信息和招聘者信息',
    stainlessPath: '(resource) v1.seeker.jobs > (method) retrieve',
    qualified: 'client.v1.seeker.jobs.retrieve',
    params: ['jobId: number;'],
    response:
      '{ code?: number; data?: { id?: string; address?: string; benefits?: string[]; city?: string; company?: object; description?: string; district?: string; education?: string; experience?: string; hasApplied?: boolean; headcount?: number; jobType?: string; publishedAt?: string; requirements?: string[]; salary?: string; tags?: string[]; title?: string; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.seeker.jobs.retrieve(jobId: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/seeker/jobs/{jobId}`\n\n获取指定职位的详细信息，包含公司信息和招聘者信息\n\n### Parameters\n\n- `jobId: number`\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; address?: string; benefits?: string[]; city?: string; company?: object; description?: string; district?: string; education?: string; experience?: string; hasApplied?: boolean; headcount?: number; jobType?: string; publishedAt?: string; requirements?: string[]; salary?: string; tags?: string[]; title?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; address?: string; benefits?: string[]; city?: string; company?: { id?: string; logo?: string; name?: string; size?: string; type?: string; }; description?: string; district?: string; education?: string; experience?: string; hasApplied?: boolean; headcount?: number; jobType?: string; publishedAt?: string; requirements?: string[]; salary?: string; tags?: string[]; title?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst job = await client.v1.seeker.jobs.retrieve(0);\n\nconsole.log(job);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/jobs/$JOB_ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.jobs.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst job = await client.v1.seeker.jobs.retrieve(0);\n\nconsole.log(job.code);",
      },
    },
  },
  {
    name: 'retrieve_recommended',
    endpoint: '/api/v1/seeker/jobs/recommended',
    httpMethod: 'get',
    summary: '获取推荐职位',
    description: '根据求职者意向和简历推荐匹配的职位',
    stainlessPath: '(resource) v1.seeker.jobs > (method) retrieve_recommended',
    qualified: 'client.v1.seeker.jobs.retrieveRecommended',
    params: ['page?: number;', 'pageSize?: number;'],
    response:
      '{ code?: number; data?: { list?: { id?: string; matchReasons?: string[]; matchScore?: number; title?: string; }[]; pagination?: object; }; message?: string; }',
    markdown:
      "## retrieve_recommended\n\n`client.v1.seeker.jobs.retrieveRecommended(page?: number, pageSize?: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/seeker/jobs/recommended`\n\n根据求职者意向和简历推荐匹配的职位\n\n### Parameters\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页数量，默认20\n\n### Returns\n\n- `{ code?: number; data?: { list?: { id?: string; matchReasons?: string[]; matchScore?: number; title?: string; }[]; pagination?: object; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; matchReasons?: string[]; matchScore?: number; title?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst response = await client.v1.seeker.jobs.retrieveRecommended();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/jobs/recommended \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.jobs.retrieveRecommended',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.seeker.jobs.retrieveRecommended();\n\nconsole.log(response.code);",
      },
    },
  },
  {
    name: 'retrieve_latest',
    endpoint: '/api/v1/seeker/jobs/latest',
    httpMethod: 'get',
    summary: '获取最新职位',
    description: '获取最新发布的职位列表',
    stainlessPath: '(resource) v1.seeker.jobs > (method) retrieve_latest',
    qualified: 'client.v1.seeker.jobs.retrieveLatest',
    params: ['limit?: number;'],
    response:
      '{ code?: number; data?: { id?: string; city?: string; company?: company_info; district?: string; education?: string; experience?: string; publishedAt?: string; salary?: string; tags?: string[]; title?: string; }[]; message?: string; }',
    markdown:
      "## retrieve_latest\n\n`client.v1.seeker.jobs.retrieveLatest(limit?: number): { code?: number; data?: job_list_response[]; message?: string; }`\n\n**get** `/api/v1/seeker/jobs/latest`\n\n获取最新发布的职位列表\n\n### Parameters\n\n- `limit?: number`\n  数量限制，默认10\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; city?: string; company?: company_info; district?: string; education?: string; experience?: string; publishedAt?: string; salary?: string; tags?: string[]; title?: string; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; city?: string; company?: { id?: string; logo?: string; name?: string; size?: string; type?: string; }; district?: string; education?: string; experience?: string; publishedAt?: string; salary?: string; tags?: string[]; title?: string; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListJobList = await client.v1.seeker.jobs.retrieveLatest();\n\nconsole.log(resultListJobList);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/jobs/latest \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.jobs.retrieveLatest',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListJobList = await client.v1.seeker.jobs.retrieveLatest();\n\nconsole.log(resultListJobList.code);",
      },
    },
  },
  {
    name: 'retrieve_hot',
    endpoint: '/api/v1/seeker/jobs/hot',
    httpMethod: 'get',
    summary: '获取热门职位',
    description: '获取热门职位列表',
    stainlessPath: '(resource) v1.seeker.jobs > (method) retrieve_hot',
    qualified: 'client.v1.seeker.jobs.retrieveHot',
    params: ['limit?: number;'],
    response:
      '{ code?: number; data?: { id?: string; city?: string; company?: company_info; district?: string; education?: string; experience?: string; publishedAt?: string; salary?: string; tags?: string[]; title?: string; }[]; message?: string; }',
    markdown:
      "## retrieve_hot\n\n`client.v1.seeker.jobs.retrieveHot(limit?: number): { code?: number; data?: job_list_response[]; message?: string; }`\n\n**get** `/api/v1/seeker/jobs/hot`\n\n获取热门职位列表\n\n### Parameters\n\n- `limit?: number`\n  数量限制，默认10\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; city?: string; company?: company_info; district?: string; education?: string; experience?: string; publishedAt?: string; salary?: string; tags?: string[]; title?: string; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; city?: string; company?: { id?: string; logo?: string; name?: string; size?: string; type?: string; }; district?: string; education?: string; experience?: string; publishedAt?: string; salary?: string; tags?: string[]; title?: string; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListJobList = await client.v1.seeker.jobs.retrieveHot();\n\nconsole.log(resultListJobList);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/jobs/hot \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.jobs.retrieveHot',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListJobList = await client.v1.seeker.jobs.retrieveHot();\n\nconsole.log(resultListJobList.code);",
      },
    },
  },
  {
    name: 'retrieve_categories',
    endpoint: '/api/v1/seeker/jobs/categories',
    httpMethod: 'get',
    summary: '获取职位分类列表',
    description: '获取所有职位分类，包含一级和二级分类',
    stainlessPath: '(resource) v1.seeker.jobs > (method) retrieve_categories',
    qualified: 'client.v1.seeker.jobs.retrieveCategories',
    response:
      '{ code?: number; data?: { id?: string; icon?: string; name?: string; subcategories?: { id?: string; name?: string; positions?: string[]; }[]; }[]; message?: string; }',
    markdown:
      "## retrieve_categories\n\n`client.v1.seeker.jobs.retrieveCategories(): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/v1/seeker/jobs/categories`\n\n获取所有职位分类，包含一级和二级分类\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; icon?: string; name?: string; subcategories?: { id?: string; name?: string; positions?: string[]; }[]; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; icon?: string; name?: string; subcategories?: { id?: string; name?: string; positions?: string[]; }[]; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst response = await client.v1.seeker.jobs.retrieveCategories();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/seeker/jobs/categories \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.seeker.jobs.retrieveCategories',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.seeker.jobs.retrieveCategories();\n\nconsole.log(response.code);",
      },
    },
  },
  {
    name: 'submit_feedback',
    endpoint: '/api/v1/enterprise/feedbacks',
    httpMethod: 'post',
    summary: '提交反馈',
    description: '提交问题反馈、建议等',
    stainlessPath: '(resource) v1.enterprise > (method) submit_feedback',
    qualified: 'client.v1.enterprise.submitFeedback',
    params: [
      'content: string;',
      'type: string;',
      'appVersion?: string;',
      'contact?: string;',
      'screenshots?: string[];',
      'title?: string;',
    ],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## submit_feedback\n\n`client.v1.enterprise.submitFeedback(content: string, type: string, appVersion?: string, contact?: string, screenshots?: string[], title?: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/feedbacks`\n\n提交问题反馈、建议等\n\n### Parameters\n\n- `content: string`\n  反馈内容\n\n- `type: string`\n  反馈类型: bug/suggestion/complaint/other\n\n- `appVersion?: string`\n  APP版本\n\n- `contact?: string`\n  联系方式\n\n- `screenshots?: string[]`\n  截图URL列表\n\n- `title?: string`\n  反馈标题\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.enterprise.submitFeedback({ content: '发现一个问题...', type: 'bug' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/feedbacks \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "content": "发现一个问题...",\n          "type": "bug",\n          "appVersion": "1.0.0",\n          "contact": "13800138000",\n          "screenshots": [\n            "https://example.com/1.jpg"\n          ],\n          "title": "发现了一个问题"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.submitFeedback',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.enterprise.submitFeedback({\n  content: '发现一个问题...',\n  type: 'bug',\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/enterprise/schedules/{scheduleId}',
    httpMethod: 'get',
    summary: '获取日程详情',
    description: '获取指定日程的详细信息',
    stainlessPath: '(resource) v1.enterprise.schedules > (method) retrieve',
    qualified: 'client.v1.enterprise.schedules.retrieve',
    params: ['scheduleId: number;'],
    response:
      '{ code?: number; data?: { id?: string; createdAt?: string; createdBy?: user_info; description?: string; endTime?: string; feedbacks?: feedback_info[]; interviewers?: interviewer_info[]; location?: string; meetingLink?: string; meetingRoom?: string; position?: position_info; resumeId?: string; round?: string; startTime?: string; status?: string; talent?: talent_info; title?: string; type?: string; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.enterprise.schedules.retrieve(scheduleId: number): { code?: number; data?: schedule_detail_response; message?: string; }`\n\n**get** `/api/v1/enterprise/schedules/{scheduleId}`\n\n获取指定日程的详细信息\n\n### Parameters\n\n- `scheduleId: number`\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; createdAt?: string; createdBy?: user_info; description?: string; endTime?: string; feedbacks?: feedback_info[]; interviewers?: interviewer_info[]; location?: string; meetingLink?: string; meetingRoom?: string; position?: position_info; resumeId?: string; round?: string; startTime?: string; status?: string; talent?: talent_info; title?: string; type?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; createdAt?: string; createdBy?: { id?: string; name?: string; }; description?: string; endTime?: string; feedbacks?: { id?: string; content?: string; createdAt?: string; result?: string; userId?: string; userName?: string; }[]; interviewers?: { id?: string; avatar?: string; hasFeedback?: boolean; isMain?: boolean; name?: string; }[]; location?: string; meetingLink?: string; meetingRoom?: string; position?: { id?: string; name?: string; }; resumeId?: string; round?: string; startTime?: string; status?: string; talent?: { id?: string; avatar?: string; name?: string; targetPosition?: string; }; title?: string; type?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultScheduleDetail = await client.v1.enterprise.schedules.retrieve(0);\n\nconsole.log(resultScheduleDetail);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/schedules/$SCHEDULE_ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.schedules.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultScheduleDetail = await client.v1.enterprise.schedules.retrieve(0);\n\nconsole.log(resultScheduleDetail.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/enterprise/schedules/{scheduleId}',
    httpMethod: 'put',
    summary: '更新日程',
    description: '更新日程时间、地点、面试官等信息（改期）',
    stainlessPath: '(resource) v1.enterprise.schedules > (method) update',
    qualified: 'client.v1.enterprise.schedules.update',
    params: [
      'scheduleId: number;',
      'endTime?: string;',
      'interviewerIds?: number[];',
      'location?: string;',
      'notifyCandidate?: boolean;',
      'reason?: string;',
      'startTime?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: string; createdAt?: string; createdBy?: user_info; description?: string; endTime?: string; feedbacks?: feedback_info[]; interviewers?: interviewer_info[]; location?: string; meetingLink?: string; meetingRoom?: string; position?: position_info; resumeId?: string; round?: string; startTime?: string; status?: string; talent?: talent_info; title?: string; type?: string; }; message?: string; }',
    markdown:
      "## update\n\n`client.v1.enterprise.schedules.update(scheduleId: number, endTime?: string, interviewerIds?: number[], location?: string, notifyCandidate?: boolean, reason?: string, startTime?: string): { code?: number; data?: schedule_detail_response; message?: string; }`\n\n**put** `/api/v1/enterprise/schedules/{scheduleId}`\n\n更新日程时间、地点、面试官等信息（改期）\n\n### Parameters\n\n- `scheduleId: number`\n\n- `endTime?: string`\n  结束时间\n\n- `interviewerIds?: number[]`\n  面试官ID列表\n\n- `location?: string`\n  面试地点\n\n- `notifyCandidate?: boolean`\n  是否通知候选人\n\n- `reason?: string`\n  改期原因\n\n- `startTime?: string`\n  开始时间\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; createdAt?: string; createdBy?: user_info; description?: string; endTime?: string; feedbacks?: feedback_info[]; interviewers?: interviewer_info[]; location?: string; meetingLink?: string; meetingRoom?: string; position?: position_info; resumeId?: string; round?: string; startTime?: string; status?: string; talent?: talent_info; title?: string; type?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; createdAt?: string; createdBy?: { id?: string; name?: string; }; description?: string; endTime?: string; feedbacks?: { id?: string; content?: string; createdAt?: string; result?: string; userId?: string; userName?: string; }[]; interviewers?: { id?: string; avatar?: string; hasFeedback?: boolean; isMain?: boolean; name?: string; }[]; location?: string; meetingLink?: string; meetingRoom?: string; position?: { id?: string; name?: string; }; resumeId?: string; round?: string; startTime?: string; status?: string; talent?: { id?: string; avatar?: string; name?: string; targetPosition?: string; }; title?: string; type?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultScheduleDetail = await client.v1.enterprise.schedules.update(0);\n\nconsole.log(resultScheduleDetail);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/v1/enterprise/schedules/$SCHEDULE_ID \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -d '{}'",
      },
      typescript: {
        method: 'client.v1.enterprise.schedules.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultScheduleDetail = await client.v1.enterprise.schedules.update(0);\n\nconsole.log(resultScheduleDetail.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/enterprise/schedules/{scheduleId}',
    httpMethod: 'delete',
    summary: '取消日程',
    description: '取消指定的日程安排',
    stainlessPath: '(resource) v1.enterprise.schedules > (method) delete',
    qualified: 'client.v1.enterprise.schedules.delete',
    params: ['scheduleId: number;', 'reason: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.enterprise.schedules.delete(scheduleId: number, reason: string): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/enterprise/schedules/{scheduleId}`\n\n取消指定的日程安排\n\n### Parameters\n\n- `scheduleId: number`\n\n- `reason: string`\n  取消原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.schedules.delete(0, { reason: 'reason' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/schedules/$SCHEDULE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.schedules.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.schedules.delete(0, { reason: 'reason' });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/enterprise/schedules',
    httpMethod: 'get',
    summary: '获取日程列表',
    description: '分页获取日程列表，支持日期范围和状态筛选',
    stainlessPath: '(resource) v1.enterprise.schedules > (method) list',
    qualified: 'client.v1.enterprise.schedules.list',
    params: [
      'endDate?: string;',
      'page?: number;',
      'pageSize?: number;',
      'startDate?: string;',
      'status?: string;',
      'type?: string;',
    ],
    response:
      '{ code?: number; data?: { list?: { id?: string; companyName?: string; jobTitle?: string; round?: string; scheduledAt?: string; status?: string; type?: string; }[]; pagination?: object; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.enterprise.schedules.list(endDate?: string, page?: number, pageSize?: number, startDate?: string, status?: string, type?: string): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/enterprise/schedules`\n\n分页获取日程列表，支持日期范围和状态筛选\n\n### Parameters\n\n- `endDate?: string`\n  结束日期(YYYY-MM-DD)\n\n- `page?: number`\n  页码\n\n- `pageSize?: number`\n  每页数量\n\n- `startDate?: string`\n  起始日期(YYYY-MM-DD)\n\n- `status?: string`\n  状态: pending/confirmed/completed/cancelled\n\n- `type?: string`\n  类型: interview/meeting\n\n### Returns\n\n- `{ code?: number; data?: { list?: { id?: string; companyName?: string; jobTitle?: string; round?: string; scheduledAt?: string; status?: string; type?: string; }[]; pagination?: object; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; companyName?: string; jobTitle?: string; round?: string; scheduledAt?: string; status?: string; type?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageScheduleList = await client.v1.enterprise.schedules.list();\n\nconsole.log(resultPageScheduleList);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/schedules \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.schedules.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageScheduleList = await client.v1.enterprise.schedules.list();\n\nconsole.log(resultPageScheduleList.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/enterprise/schedules',
    httpMethod: 'post',
    summary: '创建日程',
    description: '创建新的面试日程或会议日程',
    stainlessPath: '(resource) v1.enterprise.schedules > (method) create',
    qualified: 'client.v1.enterprise.schedules.create',
    params: [
      'endTime: string;',
      'startTime: string;',
      'type: string;',
      'description?: string;',
      'interviewerIds?: number[];',
      'location?: string;',
      'meetingLink?: string;',
      'message?: string;',
      'notifyCandidate?: boolean;',
      'resumeId?: number;',
      'round?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: string; createdAt?: string; createdBy?: user_info; description?: string; endTime?: string; feedbacks?: feedback_info[]; interviewers?: interviewer_info[]; location?: string; meetingLink?: string; meetingRoom?: string; position?: position_info; resumeId?: string; round?: string; startTime?: string; status?: string; talent?: talent_info; title?: string; type?: string; }; message?: string; }',
    markdown:
      "## create\n\n`client.v1.enterprise.schedules.create(endTime: string, startTime: string, type: string, description?: string, interviewerIds?: number[], location?: string, meetingLink?: string, message?: string, notifyCandidate?: boolean, resumeId?: number, round?: string): { code?: number; data?: schedule_detail_response; message?: string; }`\n\n**post** `/api/v1/enterprise/schedules`\n\n创建新的面试日程或会议日程\n\n### Parameters\n\n- `endTime: string`\n  结束时间\n\n- `startTime: string`\n  开始时间\n\n- `type: string`\n  类型: interview面试/meeting会议/other其他\n\n- `description?: string`\n  日程描述/面试须知\n\n- `interviewerIds?: number[]`\n  面试官ID列表\n\n- `location?: string`\n  面试地点\n\n- `meetingLink?: string`\n  线上会议链接\n\n- `message?: string`\n  通知消息\n\n- `notifyCandidate?: boolean`\n  是否通知候选人\n\n- `resumeId?: number`\n  简历ID\n\n- `round?: string`\n  面试轮次: screening初筛/first一面/second二面/third三面/hr HR面/final终面\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; createdAt?: string; createdBy?: user_info; description?: string; endTime?: string; feedbacks?: feedback_info[]; interviewers?: interviewer_info[]; location?: string; meetingLink?: string; meetingRoom?: string; position?: position_info; resumeId?: string; round?: string; startTime?: string; status?: string; talent?: talent_info; title?: string; type?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; createdAt?: string; createdBy?: { id?: string; name?: string; }; description?: string; endTime?: string; feedbacks?: { id?: string; content?: string; createdAt?: string; result?: string; userId?: string; userName?: string; }[]; interviewers?: { id?: string; avatar?: string; hasFeedback?: boolean; isMain?: boolean; name?: string; }[]; location?: string; meetingLink?: string; meetingRoom?: string; position?: { id?: string; name?: string; }; resumeId?: string; round?: string; startTime?: string; status?: string; talent?: { id?: string; avatar?: string; name?: string; targetPosition?: string; }; title?: string; type?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultScheduleDetail = await client.v1.enterprise.schedules.create({\n  endTime: '2019-12-27T18:11:19.117Z',\n  startTime: '2019-12-27T18:11:19.117Z',\n  type: 'interview',\n});\n\nconsole.log(resultScheduleDetail);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/schedules \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "endTime": "2019-12-27T18:11:19.117Z",\n          "startTime": "2019-12-27T18:11:19.117Z",\n          "type": "interview",\n          "interviewerIds": [\n            2,\n            3\n          ],\n          "location": "会议室A",\n          "message": "期待与您的面试",\n          "notifyCandidate": true,\n          "resumeId": 1,\n          "round": "first"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.schedules.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultScheduleDetail = await client.v1.enterprise.schedules.create({\n  endTime: '2019-12-27T18:11:19.117Z',\n  startTime: '2019-12-27T18:11:19.117Z',\n  type: 'interview',\n});\n\nconsole.log(resultScheduleDetail.code);",
      },
    },
  },
  {
    name: 'submit_feedback',
    endpoint: '/api/v1/enterprise/schedules/{scheduleId}/feedbacks',
    httpMethod: 'post',
    summary: '提交面试反馈',
    description: '面试官提交面试反馈和评价',
    stainlessPath: '(resource) v1.enterprise.schedules > (method) submit_feedback',
    qualified: 'client.v1.enterprise.schedules.submitFeedback',
    params: [
      'scheduleId: number;',
      'content: string;',
      'result: string;',
      'recommendation?: string;',
      'scores?: object;',
      'strengths?: string;',
      'weaknesses?: string;',
    ],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## submit_feedback\n\n`client.v1.enterprise.schedules.submitFeedback(scheduleId: number, content: string, result: string, recommendation?: string, scores?: object, strengths?: string, weaknesses?: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/schedules/{scheduleId}/feedbacks`\n\n面试官提交面试反馈和评价\n\n### Parameters\n\n- `scheduleId: number`\n\n- `content: string`\n  反馈内容\n\n- `result: string`\n  面试结论: pass通过/fail不通过/pending待定\n\n- `recommendation?: string`\n  建议: hire录用/next_round下一轮/reject淘汰/hold观望\n\n- `scores?: object`\n  维度评分\n\n- `strengths?: string`\n  优势/亮点\n\n- `weaknesses?: string`\n  不足/待提升\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.enterprise.schedules.submitFeedback(0, { content: '技术基础扎实，沟通能力良好', result: 'pass' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/schedules/$SCHEDULE_ID/feedbacks \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "content": "技术基础扎实，沟通能力良好",\n          "result": "pass",\n          "scores": {\n            "technical": 4,\n            "communication": 5\n          }\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.schedules.submitFeedback',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.enterprise.schedules.submitFeedback(0, {\n  content: '技术基础扎实，沟通能力良好',\n  result: 'pass',\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'confirm',
    endpoint: '/api/v1/enterprise/schedules/{scheduleId}/confirm',
    httpMethod: 'patch',
    summary: '确认参加日程',
    description: '求职者确认参加指定日程',
    stainlessPath: '(resource) v1.enterprise.schedules > (method) confirm',
    qualified: 'client.v1.enterprise.schedules.confirm',
    params: ['scheduleId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## confirm\n\n`client.v1.enterprise.schedules.confirm(scheduleId: number): { code?: number; data?: object; message?: string; }`\n\n**patch** `/api/v1/enterprise/schedules/{scheduleId}/confirm`\n\n求职者确认参加指定日程\n\n### Parameters\n\n- `scheduleId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.enterprise.schedules.confirm(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/schedules/$SCHEDULE_ID/confirm \\\n    -X PATCH \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.schedules.confirm',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.enterprise.schedules.confirm(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'cancel',
    endpoint: '/api/v1/enterprise/schedules/{scheduleId}/cancel',
    httpMethod: 'patch',
    summary: '取消日程（PATCH）',
    description: '兼容文档的 PATCH /schedules/{id}/cancel',
    stainlessPath: '(resource) v1.enterprise.schedules > (method) cancel',
    qualified: 'client.v1.enterprise.schedules.cancel',
    params: ['scheduleId: number;', 'reason: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## cancel\n\n`client.v1.enterprise.schedules.cancel(scheduleId: number, reason: string): { code?: number; data?: object; message?: string; }`\n\n**patch** `/api/v1/enterprise/schedules/{scheduleId}/cancel`\n\n兼容文档的 PATCH /schedules/{id}/cancel\n\n### Parameters\n\n- `scheduleId: number`\n\n- `reason: string`\n  取消原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.enterprise.schedules.cancel(0, { reason: 'reason' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/schedules/$SCHEDULE_ID/cancel \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "reason": "reason"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.schedules.cancel',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.enterprise.schedules.cancel(0, { reason: 'reason' });\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update_status',
    endpoint: '/api/v1/enterprise/resumes/{resumeId}/status',
    httpMethod: 'put',
    summary: '更新简历状态',
    description: '更新简历的处理状态，如从已投递到初筛',
    stainlessPath: '(resource) v1.enterprise.resumes > (method) update_status',
    qualified: 'client.v1.enterprise.resumes.updateStatus',
    params: ['resumeId: number;', 'status: string;', 'remark?: string;'],
    response:
      '{ code?: number; data?: { id?: string; appliedAt?: string; firstInterviewAt?: string; positionId?: string; positionName?: string; screenedAt?: string; status?: string; talent?: talent_info; talentId?: string; updatedAt?: string; }; message?: string; }',
    markdown:
      "## update_status\n\n`client.v1.enterprise.resumes.updateStatus(resumeId: number, status: string, remark?: string): { code?: number; data?: resume_list; message?: string; }`\n\n**put** `/api/v1/enterprise/resumes/{resumeId}/status`\n\n更新简历的处理状态，如从已投递到初筛\n\n### Parameters\n\n- `resumeId: number`\n\n- `status: string`\n  新状态\n\n- `remark?: string`\n  备注\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; appliedAt?: string; firstInterviewAt?: string; positionId?: string; positionName?: string; screenedAt?: string; status?: string; talent?: talent_info; talentId?: string; updatedAt?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; appliedAt?: string; firstInterviewAt?: string; positionId?: string; positionName?: string; screenedAt?: string; status?: string; talent?: { id?: string; avatar?: string; name?: string; targetPosition?: string; }; talentId?: string; updatedAt?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst response = await client.v1.enterprise.resumes.updateStatus(0, { status: 'screening' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/resumes/$RESUME_ID/status \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "status": "screening",\n          "remark": "简历符合要求，安排初筛"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.resumes.updateStatus',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.enterprise.resumes.updateStatus(0, { status: 'screening' });\n\nconsole.log(response.code);",
      },
    },
  },
  {
    name: 'reject',
    endpoint: '/api/v1/enterprise/resumes/{resumeId}/reject',
    httpMethod: 'put',
    summary: '标记简历不合适',
    description: '标记简历为不合适状态，可填写原因',
    stainlessPath: '(resource) v1.enterprise.resumes > (method) reject',
    qualified: 'client.v1.enterprise.resumes.reject',
    params: ['resumeId: number;', 'reason?: string;', 'remark?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## reject\n\n`client.v1.enterprise.resumes.reject(resumeId: number, reason?: string, remark?: string): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/v1/enterprise/resumes/{resumeId}/reject`\n\n标记简历为不合适状态，可填写原因\n\n### Parameters\n\n- `resumeId: number`\n\n- `reason?: string`\n  不合适原因\n\n- `remark?: string`\n  详细备注\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.resumes.reject(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/resumes/$RESUME_ID/reject \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "reason": "经验不匹配",\n          "remark": "项目经验与岗位要求差距较大"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.resumes.reject',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.resumes.reject(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/enterprise/resumes',
    httpMethod: 'get',
    summary: '获取简历列表',
    description: '分页获取简历列表，支持多种筛选条件',
    stainlessPath: '(resource) v1.enterprise.resumes > (method) list',
    qualified: 'client.v1.enterprise.resumes.list',
    params: [
      'request: { applyTimeEnd?: string; applyTimeStart?: string; education?: string[]; offset?: number; page?: number; pageSize?: number; positionId?: number; status?: string; workYears?: string[]; };',
    ],
    response:
      '{ code?: number; data?: { list?: object[]; pagination?: object; statistics?: { hired?: number; interviewing?: number; offering?: number; pending?: number; rejected?: number; screening?: number; total?: number; }; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.enterprise.resumes.list(request: { applyTimeEnd?: string; applyTimeStart?: string; education?: string[]; offset?: number; page?: number; pageSize?: number; positionId?: number; status?: string; workYears?: string[]; }): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/enterprise/resumes`\n\n分页获取简历列表，支持多种筛选条件\n\n### Parameters\n\n- `request: { applyTimeEnd?: string; applyTimeStart?: string; education?: string[]; offset?: number; page?: number; pageSize?: number; positionId?: number; status?: string; workYears?: string[]; }`\n  简历搜索请求\n  - `applyTimeEnd?: string`\n    投递结束时间\n  - `applyTimeStart?: string`\n    投递起始时间\n  - `education?: string[]`\n    学历筛选\n  - `offset?: number`\n  - `page?: number`\n    页码，默认1\n  - `pageSize?: number`\n    每页数量，默认20\n  - `positionId?: number`\n    职位ID\n  - `status?: string`\n    状态筛选: applied/screening/first_interview/...\n  - `workYears?: string[]`\n    工作年限筛选\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: object; statistics?: { hired?: number; interviewing?: number; offering?: number; pending?: number; rejected?: number; screening?: number; total?: number; }; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; appliedAt?: string; firstInterviewAt?: string; positionId?: string; positionName?: string; screenedAt?: string; status?: string; talent?: object; talentId?: string; updatedAt?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; statistics?: { hired?: number; interviewing?: number; offering?: number; pending?: number; rejected?: number; screening?: number; total?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resumes = await client.v1.enterprise.resumes.list({ request: {} });\n\nconsole.log(resumes);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/resumes \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.resumes.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resumes = await client.v1.enterprise.resumes.list({ request: {} });\n\nconsole.log(resumes.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/enterprise/resumes/{resumeId}',
    httpMethod: 'get',
    summary: '获取简历详情',
    description: '获取指定简历的详细信息和处理时间线',
    stainlessPath: '(resource) v1.enterprise.resumes > (method) retrieve',
    qualified: 'client.v1.enterprise.resumes.retrieve',
    params: ['resumeId: number;'],
    response:
      '{ code?: number; data?: { id?: string; appliedAt?: string; interviews?: { id?: string; feedback?: string; interviewers?: string[]; location?: string; result?: string; round?: string; time?: string; }[]; positionId?: string; positionName?: string; status?: string; talent?: object; talentId?: string; timeline?: object[]; updatedAt?: string; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.enterprise.resumes.retrieve(resumeId: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/enterprise/resumes/{resumeId}`\n\n获取指定简历的详细信息和处理时间线\n\n### Parameters\n\n- `resumeId: number`\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; appliedAt?: string; interviews?: { id?: string; feedback?: string; interviewers?: string[]; location?: string; result?: string; round?: string; time?: string; }[]; positionId?: string; positionName?: string; status?: string; talent?: object; talentId?: string; timeline?: object[]; updatedAt?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; appliedAt?: string; interviews?: { id?: string; feedback?: string; interviewers?: string[]; location?: string; result?: string; round?: string; time?: string; }[]; positionId?: string; positionName?: string; status?: string; talent?: { id?: string; avatar?: string; name?: string; targetPosition?: string; }; talentId?: string; timeline?: { description?: string; status?: string; statusText?: string; time?: string; }[]; updatedAt?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resume = await client.v1.enterprise.resumes.retrieve(0);\n\nconsole.log(resume);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/resumes/$RESUME_ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.resumes.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resume = await client.v1.enterprise.resumes.retrieve(0);\n\nconsole.log(resume.code);",
      },
    },
  },
  {
    name: 'statistics',
    endpoint: '/api/v1/enterprise/resumes/statistics',
    httpMethod: 'get',
    summary: '获取简历统计',
    description: '获取简历筛选漏斗和转化率统计数据',
    stainlessPath: '(resource) v1.enterprise.resumes > (method) statistics',
    qualified: 'client.v1.enterprise.resumes.statistics',
    params: ['endDate?: string;', 'positionId?: number;', 'startDate?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## statistics\n\n`client.v1.enterprise.resumes.statistics(endDate?: string, positionId?: number, startDate?: string): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/enterprise/resumes/statistics`\n\n获取简历筛选漏斗和转化率统计数据\n\n### Parameters\n\n- `endDate?: string`\n  结束日期\n\n- `positionId?: number`\n  职位ID\n\n- `startDate?: string`\n  起始日期\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.enterprise.resumes.statistics();\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/resumes/statistics \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.resumes.statistics',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.enterprise.resumes.statistics();\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/enterprise/quick-replies/{id}',
    httpMethod: 'put',
    summary: '更新常用语',
    description: '更新指定常用语',
    stainlessPath: '(resource) v1.enterprise.quick_replies > (method) update',
    qualified: 'client.v1.enterprise.quickReplies.update',
    params: [
      'id: number;',
      'category?: string;',
      'content?: string;',
      'shortcut?: string;',
      'sortOrder?: number;',
    ],
    response:
      '{ code?: number; data?: { id?: string; category?: string; content?: string; createdAt?: string; shortcut?: string; sortOrder?: number; useCount?: number; }; message?: string; }',
    markdown:
      "## update\n\n`client.v1.enterprise.quickReplies.update(id: number, category?: string, content?: string, shortcut?: string, sortOrder?: number): { code?: number; data?: quick_reply_list; message?: string; }`\n\n**put** `/api/v1/enterprise/quick-replies/{id}`\n\n更新指定常用语\n\n### Parameters\n\n- `id: number`\n\n- `category?: string`\n  分类\n\n- `content?: string`\n  常用语内容\n\n- `shortcut?: string`\n  快捷键/关键词\n\n- `sortOrder?: number`\n  排序\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; category?: string; content?: string; createdAt?: string; shortcut?: string; sortOrder?: number; useCount?: number; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; category?: string; content?: string; createdAt?: string; shortcut?: string; sortOrder?: number; useCount?: number; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultQuickReplyList = await client.v1.enterprise.quickReplies.update(0);\n\nconsole.log(resultQuickReplyList);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/v1/enterprise/quick-replies/$ID \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -d '{}'",
      },
      typescript: {
        method: 'client.v1.enterprise.quickReplies.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultQuickReplyList = await client.v1.enterprise.quickReplies.update(0);\n\nconsole.log(resultQuickReplyList.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/enterprise/quick-replies/{id}',
    httpMethod: 'delete',
    summary: '删除常用语',
    description: '删除指定常用语',
    stainlessPath: '(resource) v1.enterprise.quick_replies > (method) delete',
    qualified: 'client.v1.enterprise.quickReplies.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.enterprise.quickReplies.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/enterprise/quick-replies/{id}`\n\n删除指定常用语\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.quickReplies.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/quick-replies/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.quickReplies.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.quickReplies.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/enterprise/quick-replies',
    httpMethod: 'get',
    summary: '获取常用语列表',
    description: '获取当前用户的常用语列表',
    stainlessPath: '(resource) v1.enterprise.quick_replies > (method) list',
    qualified: 'client.v1.enterprise.quickReplies.list',
    params: ['category?: string;'],
    response:
      '{ code?: number; data?: { id?: string; category?: string; content?: string; createdAt?: string; shortcut?: string; sortOrder?: number; useCount?: number; }[]; message?: string; }',
    markdown:
      "## list\n\n`client.v1.enterprise.quickReplies.list(category?: string): { code?: number; data?: quick_reply_list[]; message?: string; }`\n\n**get** `/api/v1/enterprise/quick-replies`\n\n获取当前用户的常用语列表\n\n### Parameters\n\n- `category?: string`\n  分类筛选\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; category?: string; content?: string; createdAt?: string; shortcut?: string; sortOrder?: number; useCount?: number; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; category?: string; content?: string; createdAt?: string; shortcut?: string; sortOrder?: number; useCount?: number; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst quickReplies = await client.v1.enterprise.quickReplies.list();\n\nconsole.log(quickReplies);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/quick-replies \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.quickReplies.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst quickReplies = await client.v1.enterprise.quickReplies.list();\n\nconsole.log(quickReplies.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/enterprise/quick-replies',
    httpMethod: 'post',
    summary: '创建常用语',
    description: '添加新的常用语',
    stainlessPath: '(resource) v1.enterprise.quick_replies > (method) create',
    qualified: 'client.v1.enterprise.quickReplies.create',
    params: ['content: string;', 'category?: string;', 'shortcut?: string;', 'sortOrder?: number;'],
    response:
      '{ code?: number; data?: { id?: string; category?: string; content?: string; createdAt?: string; shortcut?: string; sortOrder?: number; useCount?: number; }; message?: string; }',
    markdown:
      "## create\n\n`client.v1.enterprise.quickReplies.create(content: string, category?: string, shortcut?: string, sortOrder?: number): { code?: number; data?: quick_reply_list; message?: string; }`\n\n**post** `/api/v1/enterprise/quick-replies`\n\n添加新的常用语\n\n### Parameters\n\n- `content: string`\n  常用语内容\n\n- `category?: string`\n  分类: 问候/邀约/回复/结束语\n\n- `shortcut?: string`\n  快捷键/关键词\n\n- `sortOrder?: number`\n  排序\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; category?: string; content?: string; createdAt?: string; shortcut?: string; sortOrder?: number; useCount?: number; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; category?: string; content?: string; createdAt?: string; shortcut?: string; sortOrder?: number; useCount?: number; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultQuickReplyList = await client.v1.enterprise.quickReplies.create({ content: '您好，感谢您对我们公司的关注' });\n\nconsole.log(resultQuickReplyList);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/quick-replies \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "content": "您好，感谢您对我们公司的关注",\n          "category": "问候",\n          "shortcut": "hello",\n          "sortOrder": 1\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.quickReplies.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultQuickReplyList = await client.v1.enterprise.quickReplies.create({\n  content: '您好，感谢您对我们公司的关注',\n});\n\nconsole.log(resultQuickReplyList.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/enterprise/positions/{positionId}',
    httpMethod: 'get',
    summary: '获取职位详情',
    description: '获取指定职位的详细信息',
    stainlessPath: '(resource) v1.enterprise.positions > (method) retrieve',
    qualified: 'client.v1.enterprise.positions.retrieve',
    params: ['positionId: number;'],
    response:
      '{ code?: number; data?: { id?: string; address?: string; benefits?: string[]; category?: string; city?: string; closeReason?: string; createdAt?: string; createdBy?: creator; description?: string; district?: string; education?: string; experience?: string; headcount?: number; highlights?: string[]; interviewProcess?: string[]; name?: string; requirements?: string; salaryMax?: number; salaryMin?: number; salaryRange?: string; skills?: string[]; statistics?: statistics; status?: string; subCategory?: string; updatedAt?: string; urgency?: boolean; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.enterprise.positions.retrieve(positionId: number): { code?: number; data?: position_detail_response; message?: string; }`\n\n**get** `/api/v1/enterprise/positions/{positionId}`\n\n获取指定职位的详细信息\n\n### Parameters\n\n- `positionId: number`\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; address?: string; benefits?: string[]; category?: string; city?: string; closeReason?: string; createdAt?: string; createdBy?: creator; description?: string; district?: string; education?: string; experience?: string; headcount?: number; highlights?: string[]; interviewProcess?: string[]; name?: string; requirements?: string; salaryMax?: number; salaryMin?: number; salaryRange?: string; skills?: string[]; statistics?: statistics; status?: string; subCategory?: string; updatedAt?: string; urgency?: boolean; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; address?: string; benefits?: string[]; category?: string; city?: string; closeReason?: string; createdAt?: string; createdBy?: { id?: string; name?: string; }; description?: string; district?: string; education?: string; experience?: string; headcount?: number; highlights?: string[]; interviewProcess?: string[]; name?: string; requirements?: string; salaryMax?: number; salaryMin?: number; salaryRange?: string; skills?: string[]; statistics?: { applications?: number; hired?: number; interviews?: number; views?: number; }; status?: string; subCategory?: string; updatedAt?: string; urgency?: boolean; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPositionDetail = await client.v1.enterprise.positions.retrieve(0);\n\nconsole.log(resultPositionDetail);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/positions/$POSITION_ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.positions.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPositionDetail = await client.v1.enterprise.positions.retrieve(0);\n\nconsole.log(resultPositionDetail.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/enterprise/positions/{positionId}',
    httpMethod: 'put',
    summary: '更新职位',
    description: '更新指定职位的信息，需要管理员或HR权限',
    stainlessPath: '(resource) v1.enterprise.positions > (method) update',
    qualified: 'client.v1.enterprise.positions.update',
    params: [
      'positionId: number;',
      'city: string;',
      'name: string;',
      'salaryMax: number;',
      'salaryMin: number;',
      'address?: string;',
      'benefits?: string[];',
      'category?: string;',
      'description?: string;',
      'district?: string;',
      'education?: string;',
      'experience?: string;',
      'headcount?: number;',
      'highlights?: string[];',
      'interviewProcess?: string[];',
      'jobType?: string;',
      'requirements?: string;',
      'salaryMonth?: number;',
      'skills?: string[];',
      'subCategory?: string;',
      'urgency?: boolean;',
    ],
    response:
      '{ code?: number; data?: { id?: string; address?: string; benefits?: string[]; category?: string; city?: string; closeReason?: string; createdAt?: string; createdBy?: creator; description?: string; district?: string; education?: string; experience?: string; headcount?: number; highlights?: string[]; interviewProcess?: string[]; name?: string; requirements?: string; salaryMax?: number; salaryMin?: number; salaryRange?: string; skills?: string[]; statistics?: statistics; status?: string; subCategory?: string; updatedAt?: string; urgency?: boolean; }; message?: string; }',
    markdown:
      "## update\n\n`client.v1.enterprise.positions.update(positionId: number, city: string, name: string, salaryMax: number, salaryMin: number, address?: string, benefits?: string[], category?: string, description?: string, district?: string, education?: string, experience?: string, headcount?: number, highlights?: string[], interviewProcess?: string[], jobType?: string, requirements?: string, salaryMonth?: number, skills?: string[], subCategory?: string, urgency?: boolean): { code?: number; data?: position_detail_response; message?: string; }`\n\n**put** `/api/v1/enterprise/positions/{positionId}`\n\n更新指定职位的信息，需要管理员或HR权限\n\n### Parameters\n\n- `positionId: number`\n\n- `city: string`\n  工作城市\n\n- `name: string`\n  职位名称\n\n- `salaryMax: number`\n  最高薪资(K)\n\n- `salaryMin: number`\n  最低薪资(K)\n\n- `address?: string`\n  详细工作地址\n\n- `benefits?: string[]`\n  职位福利\n\n- `category?: string`\n  职位类别\n\n- `description?: string`\n  职位描述\n\n- `district?: string`\n  工作区县\n\n- `education?: string`\n  学历要求\n\n- `experience?: string`\n  经验要求\n\n- `headcount?: number`\n  招聘人数\n\n- `highlights?: string[]`\n  职位亮点\n\n- `interviewProcess?: string[]`\n  面试流程\n\n- `jobType?: string`\n  工作类型\n\n- `requirements?: string`\n  任职要求\n\n- `salaryMonth?: number`\n  薪资月数\n\n- `skills?: string[]`\n  技能要求\n\n- `subCategory?: string`\n  职位子类别\n\n- `urgency?: boolean`\n  是否急聘\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; address?: string; benefits?: string[]; category?: string; city?: string; closeReason?: string; createdAt?: string; createdBy?: creator; description?: string; district?: string; education?: string; experience?: string; headcount?: number; highlights?: string[]; interviewProcess?: string[]; name?: string; requirements?: string; salaryMax?: number; salaryMin?: number; salaryRange?: string; skills?: string[]; statistics?: statistics; status?: string; subCategory?: string; updatedAt?: string; urgency?: boolean; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; address?: string; benefits?: string[]; category?: string; city?: string; closeReason?: string; createdAt?: string; createdBy?: { id?: string; name?: string; }; description?: string; district?: string; education?: string; experience?: string; headcount?: number; highlights?: string[]; interviewProcess?: string[]; name?: string; requirements?: string; salaryMax?: number; salaryMin?: number; salaryRange?: string; skills?: string[]; statistics?: { applications?: number; hired?: number; interviews?: number; views?: number; }; status?: string; subCategory?: string; updatedAt?: string; urgency?: boolean; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPositionDetail = await client.v1.enterprise.positions.update(0, {\n  city: '北京',\n  name: '高级Java工程师',\n  salaryMax: 35,\n  salaryMin: 25,\n});\n\nconsole.log(resultPositionDetail);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/positions/$POSITION_ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "city": "北京",\n          "name": "高级Java工程师",\n          "salaryMax": 35,\n          "salaryMin": 25,\n          "address": "朝阳区xxx大厦",\n          "benefits": [\n            "五险一金",\n            "带薪年假"\n          ],\n          "category": "技术",\n          "description": "岗位职责：...",\n          "district": "朝阳区",\n          "education": "本科",\n          "experience": "3-5年",\n          "headcount": 2,\n          "highlights": [\n            "核心部门",\n            "技术大牛"\n          ],\n          "interviewProcess": [\n            "初筛",\n            "一面",\n            "二面",\n            "HR面"\n          ],\n          "jobType": "full_time",\n          "requirements": "任职要求：...",\n          "salaryMonth": 13,\n          "skills": [\n            "Java",\n            "Spring Boot",\n            "MySQL"\n          ],\n          "subCategory": "后端开发"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.positions.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPositionDetail = await client.v1.enterprise.positions.update(0, {\n  city: '北京',\n  name: '高级Java工程师',\n  salaryMax: 35,\n  salaryMin: 25,\n});\n\nconsole.log(resultPositionDetail.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/enterprise/positions/{positionId}',
    httpMethod: 'delete',
    summary: '删除职位',
    description: '删除指定职位，需要管理员或HR权限',
    stainlessPath: '(resource) v1.enterprise.positions > (method) delete',
    qualified: 'client.v1.enterprise.positions.delete',
    params: ['positionId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.enterprise.positions.delete(positionId: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/enterprise/positions/{positionId}`\n\n删除指定职位，需要管理员或HR权限\n\n### Parameters\n\n- `positionId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.positions.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/positions/$POSITION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.positions.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.positions.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'update_status',
    endpoint: '/api/v1/enterprise/positions/{positionId}/status',
    httpMethod: 'put',
    summary: '更新职位状态',
    description: '开启或关闭职位',
    stainlessPath: '(resource) v1.enterprise.positions > (method) update_status',
    qualified: 'client.v1.enterprise.positions.updateStatus',
    params: ['positionId: number;', 'status: string;', 'reason?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_status\n\n`client.v1.enterprise.positions.updateStatus(positionId: number, status: string, reason?: string): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/v1/enterprise/positions/{positionId}/status`\n\n开启或关闭职位\n\n### Parameters\n\n- `positionId: number`\n\n- `status: string`\n  状态: active/closed\n\n- `reason?: string`\n  关闭原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.positions.updateStatus(0, { status: 'closed' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/positions/$POSITION_ID/status \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "status": "closed",\n          "reason": "已招满"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.positions.updateStatus',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.positions.updateStatus(0, { status: 'closed' });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/enterprise/positions',
    httpMethod: 'get',
    summary: '获取职位列表',
    description: '分页获取企业职位列表，支持状态和关键词筛选',
    stainlessPath: '(resource) v1.enterprise.positions > (method) list',
    qualified: 'client.v1.enterprise.positions.list',
    params: [
      'request: { keyword?: string; offset?: number; page?: number; pageSize?: number; status?: string; };',
    ],
    response:
      '{ code?: number; data?: { list?: { id?: string; category?: string; city?: string; createdAt?: string; education?: string; experience?: string; name?: string; salaryRange?: string; statistics?: statistics; status?: string; updatedAt?: string; }[]; pagination?: object; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.enterprise.positions.list(request: { keyword?: string; offset?: number; page?: number; pageSize?: number; status?: string; }): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/enterprise/positions`\n\n分页获取企业职位列表，支持状态和关键词筛选\n\n### Parameters\n\n- `request: { keyword?: string; offset?: number; page?: number; pageSize?: number; status?: string; }`\n  职位搜索请求\n  - `keyword?: string`\n    搜索关键词\n  - `offset?: number`\n  - `page?: number`\n    页码，默认1\n  - `pageSize?: number`\n    每页数量，默认20\n  - `status?: string`\n    状态筛选: active/closed\n\n### Returns\n\n- `{ code?: number; data?: { list?: { id?: string; category?: string; city?: string; createdAt?: string; education?: string; experience?: string; name?: string; salaryRange?: string; statistics?: statistics; status?: string; updatedAt?: string; }[]; pagination?: object; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; category?: string; city?: string; createdAt?: string; education?: string; experience?: string; name?: string; salaryRange?: string; statistics?: { applications?: number; hired?: number; interviews?: number; views?: number; }; status?: string; updatedAt?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst positions = await client.v1.enterprise.positions.list({ request: {} });\n\nconsole.log(positions);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/positions \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.positions.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst positions = await client.v1.enterprise.positions.list({ request: {} });\n\nconsole.log(positions.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/enterprise/positions',
    httpMethod: 'post',
    summary: '创建职位',
    description: '创建新职位，需要管理员或HR权限',
    stainlessPath: '(resource) v1.enterprise.positions > (method) create',
    qualified: 'client.v1.enterprise.positions.create',
    params: [
      'city: string;',
      'name: string;',
      'salaryMax: number;',
      'salaryMin: number;',
      'address?: string;',
      'benefits?: string[];',
      'category?: string;',
      'description?: string;',
      'district?: string;',
      'education?: string;',
      'experience?: string;',
      'headcount?: number;',
      'highlights?: string[];',
      'interviewProcess?: string[];',
      'jobType?: string;',
      'requirements?: string;',
      'salaryMonth?: number;',
      'skills?: string[];',
      'subCategory?: string;',
      'urgency?: boolean;',
    ],
    response:
      '{ code?: number; data?: { id?: string; address?: string; benefits?: string[]; category?: string; city?: string; closeReason?: string; createdAt?: string; createdBy?: creator; description?: string; district?: string; education?: string; experience?: string; headcount?: number; highlights?: string[]; interviewProcess?: string[]; name?: string; requirements?: string; salaryMax?: number; salaryMin?: number; salaryRange?: string; skills?: string[]; statistics?: statistics; status?: string; subCategory?: string; updatedAt?: string; urgency?: boolean; }; message?: string; }',
    markdown:
      "## create\n\n`client.v1.enterprise.positions.create(city: string, name: string, salaryMax: number, salaryMin: number, address?: string, benefits?: string[], category?: string, description?: string, district?: string, education?: string, experience?: string, headcount?: number, highlights?: string[], interviewProcess?: string[], jobType?: string, requirements?: string, salaryMonth?: number, skills?: string[], subCategory?: string, urgency?: boolean): { code?: number; data?: position_detail_response; message?: string; }`\n\n**post** `/api/v1/enterprise/positions`\n\n创建新职位，需要管理员或HR权限\n\n### Parameters\n\n- `city: string`\n  工作城市\n\n- `name: string`\n  职位名称\n\n- `salaryMax: number`\n  最高薪资(K)\n\n- `salaryMin: number`\n  最低薪资(K)\n\n- `address?: string`\n  详细工作地址\n\n- `benefits?: string[]`\n  职位福利\n\n- `category?: string`\n  职位类别\n\n- `description?: string`\n  职位描述\n\n- `district?: string`\n  工作区县\n\n- `education?: string`\n  学历要求\n\n- `experience?: string`\n  经验要求\n\n- `headcount?: number`\n  招聘人数\n\n- `highlights?: string[]`\n  职位亮点\n\n- `interviewProcess?: string[]`\n  面试流程\n\n- `jobType?: string`\n  工作类型\n\n- `requirements?: string`\n  任职要求\n\n- `salaryMonth?: number`\n  薪资月数\n\n- `skills?: string[]`\n  技能要求\n\n- `subCategory?: string`\n  职位子类别\n\n- `urgency?: boolean`\n  是否急聘\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; address?: string; benefits?: string[]; category?: string; city?: string; closeReason?: string; createdAt?: string; createdBy?: creator; description?: string; district?: string; education?: string; experience?: string; headcount?: number; highlights?: string[]; interviewProcess?: string[]; name?: string; requirements?: string; salaryMax?: number; salaryMin?: number; salaryRange?: string; skills?: string[]; statistics?: statistics; status?: string; subCategory?: string; updatedAt?: string; urgency?: boolean; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; address?: string; benefits?: string[]; category?: string; city?: string; closeReason?: string; createdAt?: string; createdBy?: { id?: string; name?: string; }; description?: string; district?: string; education?: string; experience?: string; headcount?: number; highlights?: string[]; interviewProcess?: string[]; name?: string; requirements?: string; salaryMax?: number; salaryMin?: number; salaryRange?: string; skills?: string[]; statistics?: { applications?: number; hired?: number; interviews?: number; views?: number; }; status?: string; subCategory?: string; updatedAt?: string; urgency?: boolean; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPositionDetail = await client.v1.enterprise.positions.create({\n  city: '北京',\n  name: '高级Java工程师',\n  salaryMax: 35,\n  salaryMin: 25,\n});\n\nconsole.log(resultPositionDetail);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/positions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "city": "北京",\n          "name": "高级Java工程师",\n          "salaryMax": 35,\n          "salaryMin": 25,\n          "address": "朝阳区xxx大厦",\n          "benefits": [\n            "五险一金",\n            "带薪年假"\n          ],\n          "category": "技术",\n          "description": "岗位职责：...",\n          "district": "朝阳区",\n          "education": "本科",\n          "experience": "3-5年",\n          "headcount": 2,\n          "highlights": [\n            "核心部门",\n            "技术大牛"\n          ],\n          "interviewProcess": [\n            "初筛",\n            "一面",\n            "二面",\n            "HR面"\n          ],\n          "jobType": "full_time",\n          "requirements": "任职要求：...",\n          "salaryMonth": 13,\n          "skills": [\n            "Java",\n            "Spring Boot",\n            "MySQL"\n          ],\n          "subCategory": "后端开发"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.positions.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPositionDetail = await client.v1.enterprise.positions.create({\n  city: '北京',\n  name: '高级Java工程师',\n  salaryMax: 35,\n  salaryMin: 25,\n});\n\nconsole.log(resultPositionDetail.code);",
      },
    },
  },
  {
    name: 'recall',
    endpoint: '/api/v1/enterprise/message/{messageId}/recall',
    httpMethod: 'post',
    summary: '撤回消息',
    description: '撤回消息',
    stainlessPath: '(resource) v1.enterprise.message > (method) recall',
    qualified: 'client.v1.enterprise.message.recall',
    params: ['messageId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## recall\n\n`client.v1.enterprise.message.recall(messageId: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/message/{messageId}/recall`\n\n撤回消息\n\n### Parameters\n\n- `messageId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.message.recall(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/message/$MESSAGE_ID/recall \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.message.recall',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.message.recall(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'pin',
    endpoint: '/api/v1/enterprise/message/conversations/{conversationId}/pin',
    httpMethod: 'put',
    summary: '置顶/取消置顶会话',
    description: '置顶/取消置顶会话',
    stainlessPath: '(resource) v1.enterprise.message.conversations > (method) pin',
    qualified: 'client.v1.enterprise.message.conversations.pin',
    params: ['conversationId: number;', 'isPinned: boolean;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## pin\n\n`client.v1.enterprise.message.conversations.pin(conversationId: number, isPinned: boolean): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/v1/enterprise/message/conversations/{conversationId}/pin`\n\n置顶/取消置顶会话\n\n### Parameters\n\n- `conversationId: number`\n\n- `isPinned: boolean`\n  是否置顶\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.message.conversations.pin(0, { isPinned: true });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/message/conversations/$CONVERSATION_ID/pin \\\n    -X PUT \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.message.conversations.pin',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.message.conversations.pin(0, { isPinned: true });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'mute',
    endpoint: '/api/v1/enterprise/message/conversations/{conversationId}/mute',
    httpMethod: 'put',
    summary: '免打扰/取消免打扰',
    description: '免打扰/取消免打扰',
    stainlessPath: '(resource) v1.enterprise.message.conversations > (method) mute',
    qualified: 'client.v1.enterprise.message.conversations.mute',
    params: ['conversationId: number;', 'isMuted: boolean;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## mute\n\n`client.v1.enterprise.message.conversations.mute(conversationId: number, isMuted: boolean): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/v1/enterprise/message/conversations/{conversationId}/mute`\n\n免打扰/取消免打扰\n\n### Parameters\n\n- `conversationId: number`\n\n- `isMuted: boolean`\n  是否免打扰\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.message.conversations.mute(0, { isMuted: true });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/message/conversations/$CONVERSATION_ID/mute \\\n    -X PUT \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.message.conversations.mute',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.message.conversations.mute(0, { isMuted: true });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/enterprise/message/conversations',
    httpMethod: 'get',
    summary: '获取会话列表',
    description: '获取当前用户的所有会话列表',
    stainlessPath: '(resource) v1.enterprise.message.conversations > (method) list',
    qualified: 'client.v1.enterprise.message.conversations.list',
    response:
      '{ code?: number; data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: position_info; positionId?: string; recentMessages?: message_response[]; resumeId?: string; status?: string; talent?: talent_info; talentId?: string; title?: string; type?: string; unreadCount?: number; }[]; message?: string; }',
    markdown:
      "## list\n\n`client.v1.enterprise.message.conversations.list(): { code?: number; data?: conversation_response[]; message?: string; }`\n\n**get** `/api/v1/enterprise/message/conversations`\n\n获取当前用户的所有会话列表\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: position_info; positionId?: string; recentMessages?: message_response[]; resumeId?: string; status?: string; talent?: talent_info; talentId?: string; title?: string; type?: string; unreadCount?: number; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: { id?: string; name?: string; }; positionId?: string; recentMessages?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: object; senderId?: string; senderType?: string; status?: string; }[]; resumeId?: string; status?: string; talent?: { id?: string; avatar?: string; name?: string; targetPosition?: string; }; talentId?: string; title?: string; type?: string; unreadCount?: number; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListConversation = await client.v1.enterprise.message.conversations.list();\n\nconsole.log(resultListConversation);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/message/conversations \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.message.conversations.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListConversation = await client.v1.enterprise.message.conversations.list();\n\nconsole.log(resultListConversation.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/enterprise/message/conversations',
    httpMethod: 'post',
    summary: '创建会话',
    description: '创建新的聊天会话',
    stainlessPath: '(resource) v1.enterprise.message.conversations > (method) create',
    qualified: 'client.v1.enterprise.message.conversations.create',
    params: [
      'talentId: number;',
      'positionId?: number;',
      'resumeId?: number;',
      'title?: string;',
      'type?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: position_info; positionId?: string; recentMessages?: message_response[]; resumeId?: string; status?: string; talent?: talent_info; talentId?: string; title?: string; type?: string; unreadCount?: number; }; message?: string; }',
    markdown:
      "## create\n\n`client.v1.enterprise.message.conversations.create(talentId: number, positionId?: number, resumeId?: number, title?: string, type?: string): { code?: number; data?: conversation_response; message?: string; }`\n\n**post** `/api/v1/enterprise/message/conversations`\n\n创建新的聊天会话\n\n### Parameters\n\n- `talentId: number`\n  人才ID\n\n- `positionId?: number`\n  职位ID\n\n- `resumeId?: number`\n  简历ID\n\n- `title?: string`\n  会话标题\n\n- `type?: string`\n  会话类型: candidate候选人/ai_assistant AI助理\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: position_info; positionId?: string; recentMessages?: message_response[]; resumeId?: string; status?: string; talent?: talent_info; talentId?: string; title?: string; type?: string; unreadCount?: number; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: { id?: string; name?: string; }; positionId?: string; recentMessages?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: object; senderId?: string; senderType?: string; status?: string; }[]; resumeId?: string; status?: string; talent?: { id?: string; avatar?: string; name?: string; targetPosition?: string; }; talentId?: string; title?: string; type?: string; unreadCount?: number; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultConversation = await client.v1.enterprise.message.conversations.create({ talentId: 1 });\n\nconsole.log(resultConversation);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/message/conversations \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "talentId": 1,\n          "positionId": 1,\n          "resumeId": 1,\n          "title": "与李明的会话",\n          "type": "candidate"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.message.conversations.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultConversation = await client.v1.enterprise.message.conversations.create({ talentId: 1 });\n\nconsole.log(resultConversation.code);",
      },
    },
  },
  {
    name: 'mark_read',
    endpoint: '/api/v1/enterprise/message/conversations/{conversationId}/read',
    httpMethod: 'post',
    summary: '标记消息已读',
    description: '标记消息已读',
    stainlessPath: '(resource) v1.enterprise.message.conversations > (method) mark_read',
    qualified: 'client.v1.enterprise.message.conversations.markRead',
    params: ['conversationId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## mark_read\n\n`client.v1.enterprise.message.conversations.markRead(conversationId: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/message/conversations/{conversationId}/read`\n\n标记消息已读\n\n### Parameters\n\n- `conversationId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.message.conversations.markRead(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/message/conversations/$CONVERSATION_ID/read \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.message.conversations.markRead',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.message.conversations.markRead(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/enterprise/message/conversations/{conversationId}',
    httpMethod: 'get',
    summary: '获取会话详情',
    description: '获取会话详情',
    stainlessPath: '(resource) v1.enterprise.message.conversations > (method) retrieve',
    qualified: 'client.v1.enterprise.message.conversations.retrieve',
    params: ['conversationId: number;'],
    response:
      '{ code?: number; data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: position_info; positionId?: string; recentMessages?: message_response[]; resumeId?: string; status?: string; talent?: talent_info; talentId?: string; title?: string; type?: string; unreadCount?: number; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.enterprise.message.conversations.retrieve(conversationId: number): { code?: number; data?: conversation_response; message?: string; }`\n\n**get** `/api/v1/enterprise/message/conversations/{conversationId}`\n\n获取会话详情\n\n### Parameters\n\n- `conversationId: number`\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: position_info; positionId?: string; recentMessages?: message_response[]; resumeId?: string; status?: string; talent?: talent_info; talentId?: string; title?: string; type?: string; unreadCount?: number; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; createdAt?: string; isMuted?: number; isPinned?: number; lastMessageAt?: string; lastMessageContent?: string; lastSenderType?: string; position?: { id?: string; name?: string; }; positionId?: string; recentMessages?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: object; senderId?: string; senderType?: string; status?: string; }[]; resumeId?: string; status?: string; talent?: { id?: string; avatar?: string; name?: string; targetPosition?: string; }; talentId?: string; title?: string; type?: string; unreadCount?: number; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultConversation = await client.v1.enterprise.message.conversations.retrieve(0);\n\nconsole.log(resultConversation);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/message/conversations/$CONVERSATION_ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.message.conversations.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultConversation = await client.v1.enterprise.message.conversations.retrieve(0);\n\nconsole.log(resultConversation.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/enterprise/message/conversations/{conversationId}',
    httpMethod: 'delete',
    summary: '删除会话',
    description: '删除会话',
    stainlessPath: '(resource) v1.enterprise.message.conversations > (method) delete',
    qualified: 'client.v1.enterprise.message.conversations.delete',
    params: ['conversationId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.enterprise.message.conversations.delete(conversationId: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/enterprise/message/conversations/{conversationId}`\n\n删除会话\n\n### Parameters\n\n- `conversationId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.message.conversations.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/message/conversations/$CONVERSATION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.message.conversations.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.message.conversations.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/enterprise/message/conversations/{conversationId}/messages',
    httpMethod: 'get',
    summary: '获取会话消息列表',
    description: '分页获取指定会话的消息列表',
    stainlessPath: '(resource) v1.enterprise.message.conversations.messages > (method) list',
    qualified: 'client.v1.enterprise.message.conversations.messages.list',
    params: ['conversationId: number;', 'before?: string;', 'page?: number;', 'pageSize?: number;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: object; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.enterprise.message.conversations.messages.list(conversationId: number, before?: string, page?: number, pageSize?: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/enterprise/message/conversations/{conversationId}/messages`\n\n分页获取指定会话的消息列表\n\n### Parameters\n\n- `conversationId: number`\n\n- `before?: string`\n  获取此时间之前的消息\n\n- `page?: number`\n  页码\n\n- `pageSize?: number`\n  每页数量\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: object; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: { id?: string; avatar?: string; name?: string; type?: string; }; senderId?: string; senderType?: string; status?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMessage = await client.v1.enterprise.message.conversations.messages.list(0);\n\nconsole.log(resultPageResultMessage);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/message/conversations/$CONVERSATION_ID/messages \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.message.conversations.messages.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMessage = await client.v1.enterprise.message.conversations.messages.list(0);\n\nconsole.log(resultPageResultMessage.code);",
      },
    },
  },
  {
    name: 'send',
    endpoint: '/api/v1/enterprise/message/conversations/{conversationId}/messages',
    httpMethod: 'post',
    summary: '发送消息',
    description: '向指定会话发送消息',
    stainlessPath: '(resource) v1.enterprise.message.conversations.messages > (method) send',
    qualified: 'client.v1.enterprise.message.conversations.messages.send',
    params: [
      'conversationId: number;',
      'content: string;',
      'conversationId: number;',
      'clientMsgId?: string;',
      'extraData?: string;',
      'msgType?: string;',
      'replyToId?: number;',
    ],
    response:
      '{ code?: number; data?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: object; senderId?: string; senderType?: string; status?: string; }; message?: string; }',
    markdown:
      "## send\n\n`client.v1.enterprise.message.conversations.messages.send(conversationId: number, content: string, conversationId: number, clientMsgId?: string, extraData?: string, msgType?: string, replyToId?: number): { code?: number; data?: message_response; message?: string; }`\n\n**post** `/api/v1/enterprise/message/conversations/{conversationId}/messages`\n\n向指定会话发送消息\n\n### Parameters\n\n- `conversationId: number`\n\n- `content: string`\n  消息内容\n\n- `conversationId: number`\n  会话ID\n\n- `clientMsgId?: string`\n  客户端消息ID(用于去重)\n\n- `extraData?: string`\n  扩展数据(JSON格式)\n\n- `msgType?: string`\n  消息类型: text文本/image图片/file文件\n\n- `replyToId?: number`\n  回复的消息ID\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: object; senderId?: string; senderType?: string; status?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; clientMsgId?: string; content?: string; conversationId?: string; createdAt?: string; extraData?: string; isRead?: number; isRecalled?: number; msgType?: string; readAt?: string; recalledAt?: string; replyToId?: string; sender?: { id?: string; avatar?: string; name?: string; type?: string; }; senderId?: string; senderType?: string; status?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMessage = await client.v1.enterprise.message.conversations.messages.send(0, { content: '您好，我们安排了面试', conversationId: 1 });\n\nconsole.log(resultMessage);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/message/conversations/$CONVERSATION_ID/messages \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "content": "您好，我们安排了面试",\n          "conversationId": 1,\n          "clientMsgId": "client-msg-001",\n          "msgType": "text",\n          "replyToId": 123\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.message.conversations.messages.send',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMessage = await client.v1.enterprise.message.conversations.messages.send(0, {\n  content: '您好，我们安排了面试',\n  conversationId: 1,\n});\n\nconsole.log(resultMessage.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/enterprise/members/{memberId}',
    httpMethod: 'get',
    summary: '获取成员详情',
    description: '获取指定成员的详细信息',
    stainlessPath: '(resource) v1.enterprise.members > (method) retrieve',
    qualified: 'client.v1.enterprise.members.retrieve',
    params: ['memberId: number;'],
    response:
      '{ code?: number; data?: { id?: string; avatar?: string; createdAt?: string; department?: string; lastActiveAt?: string; name?: string; permissions?: string[]; phone?: string; role?: string; statistics?: statistics; status?: string; title?: string; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.enterprise.members.retrieve(memberId: number): { code?: number; data?: member_detail_response; message?: string; }`\n\n**get** `/api/v1/enterprise/members/{memberId}`\n\n获取指定成员的详细信息\n\n### Parameters\n\n- `memberId: number`\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; avatar?: string; createdAt?: string; department?: string; lastActiveAt?: string; name?: string; permissions?: string[]; phone?: string; role?: string; statistics?: statistics; status?: string; title?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; avatar?: string; createdAt?: string; department?: string; lastActiveAt?: string; name?: string; permissions?: string[]; phone?: string; role?: string; statistics?: { applications?: number; hired?: number; interviews?: number; views?: number; }; status?: string; title?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMemberDetail = await client.v1.enterprise.members.retrieve(0);\n\nconsole.log(resultMemberDetail);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/members/$MEMBER_ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.members.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMemberDetail = await client.v1.enterprise.members.retrieve(0);\n\nconsole.log(resultMemberDetail.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/enterprise/members/{memberId}',
    httpMethod: 'put',
    summary: '更新成员信息',
    description: '更新指定成员的信息，需要管理员权限',
    stainlessPath: '(resource) v1.enterprise.members > (method) update',
    qualified: 'client.v1.enterprise.members.update',
    params: [
      'memberId: number;',
      'department?: string;',
      'permissions?: string[];',
      'role?: string;',
      'title?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: string; avatar?: string; createdAt?: string; department?: string; lastActiveAt?: string; name?: string; permissions?: string[]; phone?: string; role?: string; statistics?: statistics; status?: string; title?: string; }; message?: string; }',
    markdown:
      "## update\n\n`client.v1.enterprise.members.update(memberId: number, department?: string, permissions?: string[], role?: string, title?: string): { code?: number; data?: member_detail_response; message?: string; }`\n\n**put** `/api/v1/enterprise/members/{memberId}`\n\n更新指定成员的信息，需要管理员权限\n\n### Parameters\n\n- `memberId: number`\n\n- `department?: string`\n  部门\n\n- `permissions?: string[]`\n  权限列表\n\n- `role?: string`\n  角色: admin/hr/interviewer\n\n- `title?: string`\n  职位头衔\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; avatar?: string; createdAt?: string; department?: string; lastActiveAt?: string; name?: string; permissions?: string[]; phone?: string; role?: string; statistics?: statistics; status?: string; title?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; avatar?: string; createdAt?: string; department?: string; lastActiveAt?: string; name?: string; permissions?: string[]; phone?: string; role?: string; statistics?: { applications?: number; hired?: number; interviews?: number; views?: number; }; status?: string; title?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMemberDetail = await client.v1.enterprise.members.update(0);\n\nconsole.log(resultMemberDetail);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/members/$MEMBER_ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "department": "人力资源部",\n          "permissions": [\n            "view_resume",\n            "schedule_interview",\n            "send_message",\n            "manage_position"\n          ],\n          "role": "hr",\n          "title": "高级HR专员"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.members.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMemberDetail = await client.v1.enterprise.members.update(0);\n\nconsole.log(resultMemberDetail.code);",
      },
    },
  },
  {
    name: 'remove',
    endpoint: '/api/v1/enterprise/members/{memberId}',
    httpMethod: 'delete',
    summary: '移除成员',
    description: '从企业中移除指定成员，需要管理员权限。不能移除管理员',
    stainlessPath: '(resource) v1.enterprise.members > (method) remove',
    qualified: 'client.v1.enterprise.members.remove',
    params: ['memberId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## remove\n\n`client.v1.enterprise.members.remove(memberId: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/enterprise/members/{memberId}`\n\n从企业中移除指定成员，需要管理员权限。不能移除管理员\n\n### Parameters\n\n- `memberId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.members.remove(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/members/$MEMBER_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.members.remove',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.members.remove(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'enable',
    endpoint: '/api/v1/enterprise/members/{memberId}/enable',
    httpMethod: 'put',
    summary: '启用成员',
    description: '启用已禁用的成员，需要管理员权限',
    stainlessPath: '(resource) v1.enterprise.members > (method) enable',
    qualified: 'client.v1.enterprise.members.enable',
    params: ['memberId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## enable\n\n`client.v1.enterprise.members.enable(memberId: number): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/v1/enterprise/members/{memberId}/enable`\n\n启用已禁用的成员，需要管理员权限\n\n### Parameters\n\n- `memberId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.members.enable(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/members/$MEMBER_ID/enable \\\n    -X PUT \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.members.enable',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.members.enable(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'disable',
    endpoint: '/api/v1/enterprise/members/{memberId}/disable',
    httpMethod: 'put',
    summary: '禁用成员',
    description: '禁用指定成员，需要管理员权限。不能禁用管理员',
    stainlessPath: '(resource) v1.enterprise.members > (method) disable',
    qualified: 'client.v1.enterprise.members.disable',
    params: ['memberId: number;', 'reason?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## disable\n\n`client.v1.enterprise.members.disable(memberId: number, reason?: string): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/v1/enterprise/members/{memberId}/disable`\n\n禁用指定成员，需要管理员权限。不能禁用管理员\n\n### Parameters\n\n- `memberId: number`\n\n- `reason?: string`\n  禁用原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.members.disable(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/members/$MEMBER_ID/disable \\\n    -X PUT \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.members.disable',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.members.disable(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/enterprise/members',
    httpMethod: 'get',
    summary: '获取成员列表',
    description: '分页获取企业成员列表，支持按状态和角色筛选',
    stainlessPath: '(resource) v1.enterprise.members > (method) list',
    qualified: 'client.v1.enterprise.members.list',
    params: ['page?: number;', 'pageSize?: number;', 'role?: string;', 'status?: string;'],
    response:
      '{ code?: number; data?: { list?: object[]; pagination?: object; statistics?: { active?: number; disabled?: number; total?: number; }; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.enterprise.members.list(page?: number, pageSize?: number, role?: string, status?: string): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/enterprise/members`\n\n分页获取企业成员列表，支持按状态和角色筛选\n\n### Parameters\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页数量，默认20\n\n- `role?: string`\n  角色筛选: admin/hr/interviewer\n\n- `status?: string`\n  状态筛选: active/disabled\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: object; statistics?: { active?: number; disabled?: number; total?: number; }; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; avatar?: string; createdAt?: string; lastActiveAt?: string; name?: string; phone?: string; role?: string; status?: string; title?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; statistics?: { active?: number; disabled?: number; total?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst members = await client.v1.enterprise.members.list();\n\nconsole.log(members);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/members \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.members.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst members = await client.v1.enterprise.members.list();\n\nconsole.log(members.code);",
      },
    },
  },
  {
    name: 'add',
    endpoint: '/api/v1/enterprise/members',
    httpMethod: 'post',
    summary: '添加成员',
    description: '添加新成员到企业，需要管理员权限。如果手机号未注册，会自动创建账号',
    stainlessPath: '(resource) v1.enterprise.members > (method) add',
    qualified: 'client.v1.enterprise.members.add',
    params: [
      'name: string;',
      'phone: string;',
      'role: string;',
      'department?: string;',
      'permissions?: string[];',
      'title?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: string; avatar?: string; createdAt?: string; lastActiveAt?: string; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }',
    markdown:
      "## add\n\n`client.v1.enterprise.members.add(name: string, phone: string, role: string, department?: string, permissions?: string[], title?: string): { code?: number; data?: member_list; message?: string; }`\n\n**post** `/api/v1/enterprise/members`\n\n添加新成员到企业，需要管理员权限。如果手机号未注册，会自动创建账号\n\n### Parameters\n\n- `name: string`\n  姓名\n\n- `phone: string`\n  手机号\n\n- `role: string`\n  角色: admin/hr/interviewer\n\n- `department?: string`\n  部门\n\n- `permissions?: string[]`\n  权限列表\n\n- `title?: string`\n  职位头衔\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; avatar?: string; createdAt?: string; lastActiveAt?: string; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; avatar?: string; createdAt?: string; lastActiveAt?: string; name?: string; phone?: string; role?: string; status?: string; title?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst response = await client.v1.enterprise.members.add({\n  name: '王五',\n  phone: '13700137000',\n  role: 'hr',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/members \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "name": "王五",\n          "phone": "13700137000",\n          "role": "hr",\n          "department": "人力资源部",\n          "permissions": [\n            "view_resume",\n            "schedule_interview",\n            "send_message"\n          ],\n          "title": "HR专员"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.members.add',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.enterprise.members.add({\n  name: '王五',\n  phone: '13700137000',\n  role: 'hr',\n});\n\nconsole.log(response.code);",
      },
    },
  },
  {
    name: 'request_change',
    endpoint: '/api/v1/enterprise/companies/change-request',
    httpMethod: 'post',
    summary: '申请变更企业',
    description: '申请变更企业信息（如公司更名），需要管理员权限',
    stainlessPath: '(resource) v1.enterprise.companies > (method) request_change',
    qualified: 'client.v1.enterprise.companies.requestChange',
    params: ['businessLicense: string;', 'newCompanyName: string;', 'reason?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## request_change\n\n`client.v1.enterprise.companies.requestChange(businessLicense: string, newCompanyName: string, reason?: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/companies/change-request`\n\n申请变更企业信息（如公司更名），需要管理员权限\n\n### Parameters\n\n- `businessLicense: string`\n  营业执照图片URL\n\n- `newCompanyName: string`\n  新公司名称\n\n- `reason?: string`\n  变更原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.enterprise.companies.requestChange({ businessLicense: 'https://example.com/new-license.jpg', newCompanyName: '新公司名称' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/companies/change-request \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "businessLicense": "https://example.com/new-license.jpg",\n          "newCompanyName": "新公司名称",\n          "reason": "公司更名"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.companies.requestChange',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.enterprise.companies.requestChange({\n  businessLicense: 'https://example.com/new-license.jpg',\n  newCompanyName: '新公司名称',\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'request_admin_transfer',
    endpoint: '/api/v1/enterprise/companies/admin-transfer-request',
    httpMethod: 'post',
    summary: '申请变更管理员',
    description: '申请将企业管理员权限转移给另一位成员，需要当前管理员权限',
    stainlessPath: '(resource) v1.enterprise.companies > (method) request_admin_transfer',
    qualified: 'client.v1.enterprise.companies.requestAdminTransfer',
    params: ['newAdminId: number;', 'reason?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## request_admin_transfer\n\n`client.v1.enterprise.companies.requestAdminTransfer(newAdminId: number, reason?: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/companies/admin-transfer-request`\n\n申请将企业管理员权限转移给另一位成员，需要当前管理员权限\n\n### Parameters\n\n- `newAdminId: number`\n  新管理员用户ID\n\n- `reason?: string`\n  变更原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.enterprise.companies.requestAdminTransfer({ newAdminId: 2 });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/companies/admin-transfer-request \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "newAdminId": 2,\n          "reason": "工作交接"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.companies.requestAdminTransfer',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.enterprise.companies.requestAdminTransfer({\n  newAdminId: 2,\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/enterprise/companies/current',
    httpMethod: 'get',
    summary: '获取当前企业信息',
    description: '获取当前登录用户所属企业的详细信息',
    stainlessPath: '(resource) v1.enterprise.companies.current > (method) retrieve',
    qualified: 'client.v1.enterprise.companies.current.retrieve',
    response:
      '{ code?: number; data?: { id?: string; address?: string; adminId?: string; adminName?: string; businessLicense?: string; city?: string; createdAt?: string; culture?: string; description?: string; district?: string; industry?: string; isVerified?: boolean; latitude?: string; logo?: string; longitude?: string; name?: string; nature?: string; province?: string; shortName?: string; size?: string; unifiedCreditCode?: string; verifiedAt?: string; verifyRejectReason?: string; verifyStatus?: number; welfare?: string; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.enterprise.companies.current.retrieve(): { code?: number; data?: company_info_response; message?: string; }`\n\n**get** `/api/v1/enterprise/companies/current`\n\n获取当前登录用户所属企业的详细信息\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; address?: string; adminId?: string; adminName?: string; businessLicense?: string; city?: string; createdAt?: string; culture?: string; description?: string; district?: string; industry?: string; isVerified?: boolean; latitude?: string; logo?: string; longitude?: string; name?: string; nature?: string; province?: string; shortName?: string; size?: string; unifiedCreditCode?: string; verifiedAt?: string; verifyRejectReason?: string; verifyStatus?: number; welfare?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; address?: string; adminId?: string; adminName?: string; businessLicense?: string; city?: string; createdAt?: string; culture?: string; description?: string; district?: string; industry?: string; isVerified?: boolean; latitude?: string; logo?: string; longitude?: string; name?: string; nature?: string; province?: string; shortName?: string; size?: string; unifiedCreditCode?: string; verifiedAt?: string; verifyRejectReason?: string; verifyStatus?: number; welfare?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultCompanyInfo = await client.v1.enterprise.companies.current.retrieve();\n\nconsole.log(resultCompanyInfo);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/companies/current \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.companies.current.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultCompanyInfo = await client.v1.enterprise.companies.current.retrieve();\n\nconsole.log(resultCompanyInfo.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/enterprise/companies/current',
    httpMethod: 'put',
    summary: '更新当前企业信息',
    description: '更新当前企业的基本信息，需要管理员权限',
    stainlessPath: '(resource) v1.enterprise.companies.current > (method) update',
    qualified: 'client.v1.enterprise.companies.current.update',
    params: [
      'address?: string;',
      'city?: string;',
      'culture?: string;',
      'description?: string;',
      'district?: string;',
      'industry?: string;',
      'logo?: string;',
      'nature?: string;',
      'province?: string;',
      'shortName?: string;',
      'size?: string;',
      'welfare?: string;',
    ],
    response:
      '{ code?: number; data?: { id?: string; address?: string; adminId?: string; adminName?: string; businessLicense?: string; city?: string; createdAt?: string; culture?: string; description?: string; district?: string; industry?: string; isVerified?: boolean; latitude?: string; logo?: string; longitude?: string; name?: string; nature?: string; province?: string; shortName?: string; size?: string; unifiedCreditCode?: string; verifiedAt?: string; verifyRejectReason?: string; verifyStatus?: number; welfare?: string; }; message?: string; }',
    markdown:
      "## update\n\n`client.v1.enterprise.companies.current.update(address?: string, city?: string, culture?: string, description?: string, district?: string, industry?: string, logo?: string, nature?: string, province?: string, shortName?: string, size?: string, welfare?: string): { code?: number; data?: company_info_response; message?: string; }`\n\n**put** `/api/v1/enterprise/companies/current`\n\n更新当前企业的基本信息，需要管理员权限\n\n### Parameters\n\n- `address?: string`\n  详细地址\n\n- `city?: string`\n  城市\n\n- `culture?: string`\n  企业文化\n\n- `description?: string`\n  企业简介\n\n- `district?: string`\n  区县\n\n- `industry?: string`\n  所属行业\n\n- `logo?: string`\n  企业LOGO URL\n\n- `nature?: string`\n  企业性质\n\n- `province?: string`\n  省份\n\n- `shortName?: string`\n  企业简称\n\n- `size?: string`\n  企业规模\n\n- `welfare?: string`\n  企业福利(JSON数组)\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; address?: string; adminId?: string; adminName?: string; businessLicense?: string; city?: string; createdAt?: string; culture?: string; description?: string; district?: string; industry?: string; isVerified?: boolean; latitude?: string; logo?: string; longitude?: string; name?: string; nature?: string; province?: string; shortName?: string; size?: string; unifiedCreditCode?: string; verifiedAt?: string; verifyRejectReason?: string; verifyStatus?: number; welfare?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; address?: string; adminId?: string; adminName?: string; businessLicense?: string; city?: string; createdAt?: string; culture?: string; description?: string; district?: string; industry?: string; isVerified?: boolean; latitude?: string; logo?: string; longitude?: string; name?: string; nature?: string; province?: string; shortName?: string; size?: string; unifiedCreditCode?: string; verifiedAt?: string; verifyRejectReason?: string; verifyStatus?: number; welfare?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultCompanyInfo = await client.v1.enterprise.companies.current.update();\n\nconsole.log(resultCompanyInfo);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/companies/current \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "address": "北京市海淀区xxx大厦",\n          "city": "北京市",\n          "culture": "新的企业文化...",\n          "description": "新的公司简介...",\n          "district": "海淀区",\n          "industry": "互联网/IT",\n          "logo": "https://example.com/new-logo.jpg",\n          "nature": "民营",\n          "province": "北京市",\n          "shortName": "某科技",\n          "size": "500-999人",\n          "welfare": "[\\\\"五险一金\\\\",\\\\"带薪年假\\\\"]"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.companies.current.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultCompanyInfo = await client.v1.enterprise.companies.current.update();\n\nconsole.log(resultCompanyInfo.code);",
      },
    },
  },
  {
    name: 'upload_logo',
    endpoint: '/api/v1/enterprise/companies/current/logo',
    httpMethod: 'post',
    summary: '上传企业LOGO',
    description: '上传企业LOGO图片，限制2MB，仅支持图片格式',
    stainlessPath: '(resource) v1.enterprise.companies.current > (method) upload_logo',
    qualified: 'client.v1.enterprise.companies.current.uploadLogo',
    params: ['file: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## upload_logo\n\n`client.v1.enterprise.companies.current.uploadLogo(file: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/companies/current/logo`\n\n上传企业LOGO图片，限制2MB，仅支持图片格式\n\n### Parameters\n\n- `file: string`\n  LOGO图片文件\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringString = await client.v1.enterprise.companies.current.uploadLogo({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultMapStringString);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/v1/enterprise/companies/current/logo \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.v1.enterprise.companies.current.uploadLogo',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringString = await client.v1.enterprise.companies.current.uploadLogo({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultMapStringString.code);",
      },
    },
  },
  {
    name: 'upload_business_license',
    endpoint: '/api/v1/enterprise/companies/current/business-license',
    httpMethod: 'post',
    summary: '上传营业执照',
    description: '上传企业营业执照图片',
    stainlessPath: '(resource) v1.enterprise.companies.current > (method) upload_business_license',
    qualified: 'client.v1.enterprise.companies.current.uploadBusinessLicense',
    params: ['file: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## upload_business_license\n\n`client.v1.enterprise.companies.current.uploadBusinessLicense(file: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/companies/current/business-license`\n\n上传企业营业执照图片\n\n### Parameters\n\n- `file: string`\n  营业执照图片文件\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.enterprise.companies.current.uploadBusinessLicense({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/v1/enterprise/companies/current/business-license \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.v1.enterprise.companies.current.uploadBusinessLicense',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.enterprise.companies.current.uploadBusinessLicense({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'resume_optimization',
    endpoint: '/api/v1/enterprise/ai-assistant/resume-optimization',
    httpMethod: 'post',
    summary: '简历优化建议',
    description: '获取指定职位的简历优化建议',
    stainlessPath: '(resource) v1.enterprise.ai_assistant > (method) resume_optimization',
    qualified: 'client.v1.enterprise.aiAssistant.resumeOptimization',
    params: ['positionId: number;'],
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## resume_optimization\n\n`client.v1.enterprise.aiAssistant.resumeOptimization(positionId: number): { code?: number; data?: object[]; message?: string; }`\n\n**post** `/api/v1/enterprise/ai-assistant/resume-optimization`\n\n获取指定职位的简历优化建议\n\n### Parameters\n\n- `positionId: number`\n  职位ID\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.v1.enterprise.aiAssistant.resumeOptimization({ positionId: 1 });\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/ai-assistant/resume-optimization \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "positionId": 1\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.aiAssistant.resumeOptimization',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.v1.enterprise.aiAssistant.resumeOptimization({\n  positionId: 1,\n});\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'suggest_reply',
    endpoint: '/api/v1/enterprise/ai-assistant/suggest-reply',
    httpMethod: 'get',
    summary: '获取推荐回复',
    description: 'AI根据对话上下文生成推荐回复',
    stainlessPath: '(resource) v1.enterprise.ai_assistant > (method) suggest_reply',
    qualified: 'client.v1.enterprise.aiAssistant.suggestReply',
    params: ['conversationId: number;', 'context?: string;'],
    response: '{ code?: number; data?: string; message?: string; }',
    markdown:
      "## suggest_reply\n\n`client.v1.enterprise.aiAssistant.suggestReply(conversationId: number, context?: string): { code?: number; data?: string; message?: string; }`\n\n**get** `/api/v1/enterprise/ai-assistant/suggest-reply`\n\nAI根据对话上下文生成推荐回复\n\n### Parameters\n\n- `conversationId: number`\n  会话ID\n\n- `context?: string`\n  上下文信息\n\n### Returns\n\n- `{ code?: number; data?: string; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: string`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultString = await client.v1.enterprise.aiAssistant.suggestReply({ conversationId: 0 });\n\nconsole.log(resultString);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/ai-assistant/suggest-reply \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.aiAssistant.suggestReply',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultString = await client.v1.enterprise.aiAssistant.suggestReply({ conversationId: 0 });\n\nconsole.log(resultString.code);",
      },
    },
  },
  {
    name: 'position_recommendations',
    endpoint: '/api/v1/enterprise/ai-assistant/position-recommendations',
    httpMethod: 'get',
    summary: '精选职位推荐',
    description: '获取AI推荐的精选职位',
    stainlessPath: '(resource) v1.enterprise.ai_assistant > (method) position_recommendations',
    qualified: 'client.v1.enterprise.aiAssistant.positionRecommendations',
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## position_recommendations\n\n`client.v1.enterprise.aiAssistant.positionRecommendations(): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/v1/enterprise/ai-assistant/position-recommendations`\n\n获取AI推荐的精选职位\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.v1.enterprise.aiAssistant.positionRecommendations();\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/ai-assistant/position-recommendations \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.aiAssistant.positionRecommendations',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.v1.enterprise.aiAssistant.positionRecommendations();\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'generate_questions',
    endpoint: '/api/v1/enterprise/ai-assistant/generate-questions',
    httpMethod: 'get',
    summary: '生成面试题',
    description: '根据职位和简历生成个性化面试题目',
    stainlessPath: '(resource) v1.enterprise.ai_assistant > (method) generate_questions',
    qualified: 'client.v1.enterprise.aiAssistant.generateQuestions',
    params: ['positionId: number;', 'resumeId: number;'],
    response: '{ code?: number; data?: string; message?: string; }',
    markdown:
      "## generate_questions\n\n`client.v1.enterprise.aiAssistant.generateQuestions(positionId: number, resumeId: number): { code?: number; data?: string; message?: string; }`\n\n**get** `/api/v1/enterprise/ai-assistant/generate-questions`\n\n根据职位和简历生成个性化面试题目\n\n### Parameters\n\n- `positionId: number`\n  职位ID\n\n- `resumeId: number`\n  简历ID\n\n### Returns\n\n- `{ code?: number; data?: string; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: string`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultString = await client.v1.enterprise.aiAssistant.generateQuestions({ positionId: 0, resumeId: 0 });\n\nconsole.log(resultString);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/ai-assistant/generate-questions \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.aiAssistant.generateQuestions',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultString = await client.v1.enterprise.aiAssistant.generateQuestions({\n  positionId: 0,\n  resumeId: 0,\n});\n\nconsole.log(resultString.code);",
      },
    },
  },
  {
    name: 'dashboard',
    endpoint: '/api/v1/enterprise/ai-assistant/dashboard',
    httpMethod: 'get',
    summary: '获取AI面板数据',
    description: '获取招聘数据漏斗、统计和建议',
    stainlessPath: '(resource) v1.enterprise.ai_assistant > (method) dashboard',
    qualified: 'client.v1.enterprise.aiAssistant.dashboard',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## dashboard\n\n`client.v1.enterprise.aiAssistant.dashboard(): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/enterprise/ai-assistant/dashboard`\n\n获取招聘数据漏斗、统计和建议\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.enterprise.aiAssistant.dashboard();\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/ai-assistant/dashboard \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.aiAssistant.dashboard',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.enterprise.aiAssistant.dashboard();\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'analyze_resume',
    endpoint: '/api/v1/enterprise/ai-assistant/analyze-resume/{resumeId}',
    httpMethod: 'get',
    summary: 'AI简历分析',
    description: '使用AI分析简历内容并生成评估报告',
    stainlessPath: '(resource) v1.enterprise.ai_assistant > (method) analyze_resume',
    qualified: 'client.v1.enterprise.aiAssistant.analyzeResume',
    params: ['resumeId: number;'],
    response: '{ code?: number; data?: string; message?: string; }',
    markdown:
      "## analyze_resume\n\n`client.v1.enterprise.aiAssistant.analyzeResume(resumeId: number): { code?: number; data?: string; message?: string; }`\n\n**get** `/api/v1/enterprise/ai-assistant/analyze-resume/{resumeId}`\n\n使用AI分析简历内容并生成评估报告\n\n### Parameters\n\n- `resumeId: number`\n\n### Returns\n\n- `{ code?: number; data?: string; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: string`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultString = await client.v1.enterprise.aiAssistant.analyzeResume(0);\n\nconsole.log(resultString);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/ai-assistant/analyze-resume/$RESUME_ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.aiAssistant.analyzeResume',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultString = await client.v1.enterprise.aiAssistant.analyzeResume(0);\n\nconsole.log(resultString.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/enterprise/ai-assistant/setting',
    httpMethod: 'get',
    summary: '获取AI设置',
    description: '获取当前企业的AI助理配置',
    stainlessPath: '(resource) v1.enterprise.ai_assistant.setting > (method) retrieve',
    qualified: 'client.v1.enterprise.aiAssistant.setting.retrieve',
    response:
      '{ code?: number; data?: { botId?: string; dailyLimit?: number; features?: string[]; isEnabled?: boolean; maxTokens?: number; model?: string; provider?: string; systemPrompt?: string; temperature?: number; todayUsage?: number; welcomeMessage?: string; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.enterprise.aiAssistant.setting.retrieve(): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/enterprise/ai-assistant/setting`\n\n获取当前企业的AI助理配置\n\n### Returns\n\n- `{ code?: number; data?: { botId?: string; dailyLimit?: number; features?: string[]; isEnabled?: boolean; maxTokens?: number; model?: string; provider?: string; systemPrompt?: string; temperature?: number; todayUsage?: number; welcomeMessage?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { botId?: string; dailyLimit?: number; features?: string[]; isEnabled?: boolean; maxTokens?: number; model?: string; provider?: string; systemPrompt?: string; temperature?: number; todayUsage?: number; welcomeMessage?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst setting = await client.v1.enterprise.aiAssistant.setting.retrieve();\n\nconsole.log(setting);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/ai-assistant/setting \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.aiAssistant.setting.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst setting = await client.v1.enterprise.aiAssistant.setting.retrieve();\n\nconsole.log(setting.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/enterprise/ai-assistant/setting',
    httpMethod: 'put',
    summary: '更新AI设置',
    description: '更新AI助理配置（需要管理员权限）',
    stainlessPath: '(resource) v1.enterprise.ai_assistant.setting > (method) update',
    qualified: 'client.v1.enterprise.aiAssistant.setting.update',
    params: [
      'apiKey?: string;',
      'botId?: string;',
      'dailyLimit?: number;',
      'features?: string[];',
      'isEnabled?: boolean;',
      'maxTokens?: number;',
      'model?: string;',
      'provider?: string;',
      'systemPrompt?: string;',
      'temperature?: number;',
      'welcomeMessage?: string;',
    ],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update\n\n`client.v1.enterprise.aiAssistant.setting.update(apiKey?: string, botId?: string, dailyLimit?: number, features?: string[], isEnabled?: boolean, maxTokens?: number, model?: string, provider?: string, systemPrompt?: string, temperature?: number, welcomeMessage?: string): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/v1/enterprise/ai-assistant/setting`\n\n更新AI助理配置（需要管理员权限）\n\n### Parameters\n\n- `apiKey?: string`\n  API密钥\n\n- `botId?: string`\n  机器人ID\n\n- `dailyLimit?: number`\n  每日调用次数限制\n\n- `features?: string[]`\n  启用的功能\n\n- `isEnabled?: boolean`\n  是否启用AI助理\n\n- `maxTokens?: number`\n  最大token数\n\n- `model?: string`\n  模型名称\n\n- `provider?: string`\n  AI服务提供商: coze/dify/openai\n\n- `systemPrompt?: string`\n  系统提示词\n\n- `temperature?: number`\n  温度参数\n\n- `welcomeMessage?: string`\n  欢迎语\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.aiAssistant.setting.update();\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/v1/enterprise/ai-assistant/setting \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -d '{}'",
      },
      typescript: {
        method: 'client.v1.enterprise.aiAssistant.setting.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.aiAssistant.setting.update();\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/enterprise/ai-assistant/messages',
    httpMethod: 'get',
    summary: '获取AI对话历史',
    description: '获取与AI助理的对话历史记录',
    stainlessPath: '(resource) v1.enterprise.ai_assistant.messages > (method) list',
    qualified: 'client.v1.enterprise.aiAssistant.messages.list',
    params: ['page?: number;', 'pageSize?: number;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.enterprise.aiAssistant.messages.list(page?: number, pageSize?: number): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/v1/enterprise/ai-assistant/messages`\n\n获取与AI助理的对话历史记录\n\n### Parameters\n\n- `page?: number`\n  页码\n\n- `pageSize?: number`\n  每页数量\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.v1.enterprise.aiAssistant.messages.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/ai-assistant/messages \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.aiAssistant.messages.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.v1.enterprise.aiAssistant.messages.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'send',
    endpoint: '/api/v1/enterprise/ai-assistant/messages',
    httpMethod: 'post',
    summary: '发送消息给AI',
    description: '向AI助理发送消息并获取回复',
    stainlessPath: '(resource) v1.enterprise.ai_assistant.messages > (method) send',
    qualified: 'client.v1.enterprise.aiAssistant.messages.send',
    params: ['content: string;', 'sessionId?: string;'],
    response: '{ code?: number; data?: { aiResponse?: object; userMessage?: object; }; message?: string; }',
    markdown:
      "## send\n\n`client.v1.enterprise.aiAssistant.messages.send(content: string, sessionId?: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/ai-assistant/messages`\n\n向AI助理发送消息并获取回复\n\n### Parameters\n\n- `content: string`\n  消息内容\n\n- `sessionId?: string`\n  会话ID，为空则创建新会话\n\n### Returns\n\n- `{ code?: number; data?: { aiResponse?: object; userMessage?: object; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { aiResponse?: { id?: string; content?: string; timestamp?: string; type?: string; }; userMessage?: { id?: string; content?: string; timestamp?: string; type?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst response = await client.v1.enterprise.aiAssistant.messages.send({ content: '帮我分析一下本周的招聘数据' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/ai-assistant/messages \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "content": "帮我分析一下本周的招聘数据"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.aiAssistant.messages.send',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.enterprise.aiAssistant.messages.send({\n  content: '帮我分析一下本周的招聘数据',\n});\n\nconsole.log(response.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/enterprise/account/me',
    httpMethod: 'get',
    summary: '获取当前用户信息',
    description: '获取当前登录用户的详细信息',
    stainlessPath: '(resource) v1.enterprise.account.me > (method) retrieve',
    qualified: 'client.v1.enterprise.account.me.retrieve',
    response:
      '{ code?: number; data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.enterprise.account.me.retrieve(): { code?: number; data?: user_info_response; message?: string; }`\n\n**get** `/api/v1/enterprise/account/me`\n\n获取当前登录用户的详细信息\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultUserInfo = await client.v1.enterprise.account.me.retrieve();\n\nconsole.log(resultUserInfo);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/account/me \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.account.me.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultUserInfo = await client.v1.enterprise.account.me.retrieve();\n\nconsole.log(resultUserInfo.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/enterprise/account/me',
    httpMethod: 'put',
    summary: '更新当前用户信息',
    description: '更新当前登录用户的信息',
    stainlessPath: '(resource) v1.enterprise.account.me > (method) update',
    qualified: 'client.v1.enterprise.account.me.update',
    params: ['name: string;', 'avatar?: string;', 'title?: string;'],
    response:
      '{ code?: number; data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }',
    markdown:
      "## update\n\n`client.v1.enterprise.account.me.update(name: string, avatar?: string, title?: string): { code?: number; data?: user_info_response; message?: string; }`\n\n**put** `/api/v1/enterprise/account/me`\n\n更新当前登录用户的信息\n\n### Parameters\n\n- `name: string`\n  姓名\n\n- `avatar?: string`\n  头像URL\n\n- `title?: string`\n  职位头衔\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultUserInfo = await client.v1.enterprise.account.me.update({ name: '张三' });\n\nconsole.log(resultUserInfo);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/account/me \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "name": "张三",\n          "avatar": "https://example.com/avatar.jpg",\n          "title": "高级招聘经理"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.account.me.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultUserInfo = await client.v1.enterprise.account.me.update({ name: '张三' });\n\nconsole.log(resultUserInfo.code);",
      },
    },
  },
  {
    name: 'update_patch',
    endpoint: '/api/v1/enterprise/account/me',
    httpMethod: 'patch',
    summary: '更新当前用户信息（PATCH）',
    description: '兼容 PATCH 方法',
    stainlessPath: '(resource) v1.enterprise.account.me > (method) update_patch',
    qualified: 'client.v1.enterprise.account.me.updatePatch',
    params: ['name: string;', 'avatar?: string;', 'title?: string;'],
    response:
      '{ code?: number; data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }',
    markdown:
      "## update_patch\n\n`client.v1.enterprise.account.me.updatePatch(name: string, avatar?: string, title?: string): { code?: number; data?: user_info_response; message?: string; }`\n\n**patch** `/api/v1/enterprise/account/me`\n\n兼容 PATCH 方法\n\n### Parameters\n\n- `name: string`\n  姓名\n\n- `avatar?: string`\n  头像URL\n\n- `title?: string`\n  职位头衔\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; avatar?: string; companyId?: string; companyLogo?: string; companyName?: string; createdAt?: string; isVerified?: boolean; name?: string; phone?: string; role?: string; status?: string; title?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultUserInfo = await client.v1.enterprise.account.me.updatePatch({ name: '张三' });\n\nconsole.log(resultUserInfo);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/account/me \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "name": "张三",\n          "avatar": "https://example.com/avatar.jpg",\n          "title": "高级招聘经理"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.account.me.updatePatch',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultUserInfo = await client.v1.enterprise.account.me.updatePatch({ name: '张三' });\n\nconsole.log(resultUserInfo.code);",
      },
    },
  },
  {
    name: 'update_password',
    endpoint: '/api/v1/enterprise/account/me/password',
    httpMethod: 'put',
    summary: '修改密码',
    description: '修改当前登录用户的密码',
    stainlessPath: '(resource) v1.enterprise.account.me > (method) update_password',
    qualified: 'client.v1.enterprise.account.me.updatePassword',
    params: ['newPassword: string;', 'oldPassword: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_password\n\n`client.v1.enterprise.account.me.updatePassword(newPassword: string, oldPassword: string): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/v1/enterprise/account/me/password`\n\n修改当前登录用户的密码\n\n### Parameters\n\n- `newPassword: string`\n  新密码\n\n- `oldPassword: string`\n  原密码\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.account.me.updatePassword({ newPassword: 'new123', oldPassword: 'old123' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/account/me/password \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "newPassword": "new123",\n          "oldPassword": "old123"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.account.me.updatePassword',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.account.me.updatePassword({\n  newPassword: 'new123',\n  oldPassword: 'old123',\n});\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'upload_avatar',
    endpoint: '/api/v1/enterprise/account/me/avatar',
    httpMethod: 'post',
    summary: '上传头像',
    description: '上传用户头像并写回用户资料',
    stainlessPath: '(resource) v1.enterprise.account.me > (method) upload_avatar',
    qualified: 'client.v1.enterprise.account.me.uploadAvatar',
    params: ['file: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## upload_avatar\n\n`client.v1.enterprise.account.me.uploadAvatar(file: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/account/me/avatar`\n\n上传用户头像并写回用户资料\n\n### Parameters\n\n- `file: string`\n  头像文件\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringString = await client.v1.enterprise.account.me.uploadAvatar({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultMapStringString);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/v1/enterprise/account/me/avatar \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.v1.enterprise.account.me.uploadAvatar',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringString = await client.v1.enterprise.account.me.uploadAvatar({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultMapStringString.code);",
      },
    },
  },
  {
    name: 'invite',
    endpoint: '/api/v1/enterprise/talents/{talentId}/invite',
    httpMethod: 'post',
    summary: '邀请人才投递',
    description: '向指定人才发送职位邀请',
    stainlessPath: '(resource) v1.enterprise.talents > (method) invite',
    qualified: 'client.v1.enterprise.talents.invite',
    params: ['talentId: number;', 'positionId: number;', 'message?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## invite\n\n`client.v1.enterprise.talents.invite(talentId: number, positionId: number, message?: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/talents/{talentId}/invite`\n\n向指定人才发送职位邀请\n\n### Parameters\n\n- `talentId: number`\n\n- `positionId: number`\n  职位ID\n\n- `message?: string`\n  邀请消息\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.enterprise.talents.invite(0, { positionId: 1 });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/talents/$TALENT_ID/invite \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "positionId": 1,\n          "message": "您好，诚邀您投递我们的高级Java工程师岗位"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.talents.invite',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.enterprise.talents.invite(0, { positionId: 1 });\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/enterprise/talents',
    httpMethod: 'get',
    summary: '获取人才列表',
    description: '分页搜索人才列表，支持关键词、城市、学历、薪资等筛选',
    stainlessPath: '(resource) v1.enterprise.talents > (method) list',
    qualified: 'client.v1.enterprise.talents.list',
    params: [
      'request: { city?: string; education?: string; keyword?: string; offset?: number; page?: number; pageSize?: number; positionId?: number; salaryMax?: number; salaryMin?: number; sortBy?: string; sortOrder?: string; workYears?: string; };',
    ],
    response:
      '{ code?: number; data?: { list?: talent_list_response[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.enterprise.talents.list(request: { city?: string; education?: string; keyword?: string; offset?: number; page?: number; pageSize?: number; positionId?: number; salaryMax?: number; salaryMin?: number; sortBy?: string; sortOrder?: string; workYears?: string; }): { code?: number; data?: page_result_talent_list_response; message?: string; }`\n\n**get** `/api/v1/enterprise/talents`\n\n分页搜索人才列表，支持关键词、城市、学历、薪资等筛选\n\n### Parameters\n\n- `request: { city?: string; education?: string; keyword?: string; offset?: number; page?: number; pageSize?: number; positionId?: number; salaryMax?: number; salaryMin?: number; sortBy?: string; sortOrder?: string; workYears?: string; }`\n  人才搜索请求\n  - `city?: string`\n    城市筛选\n  - `education?: string`\n    学历筛选\n  - `keyword?: string`\n    搜索关键词\n  - `offset?: number`\n  - `page?: number`\n    页码，默认1\n  - `pageSize?: number`\n    每页数量，默认20\n  - `positionId?: number`\n    职位ID筛选\n  - `salaryMax?: number`\n    最高薪资(K)\n  - `salaryMin?: number`\n    最低薪资(K)\n  - `sortBy?: string`\n    排序字段：activeTime/matchScore\n  - `sortOrder?: string`\n    排序方向：asc/desc\n  - `workYears?: string`\n    工作年限筛选\n\n### Returns\n\n- `{ code?: number; data?: { list?: talent_list_response[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; avatar?: string; currentCompany?: string; currentPosition?: string; education?: string; entryTime?: string; expectedSalary?: string; gender?: number; isFavorite?: boolean; jobStatus?: string; lastActiveAt?: string; matchScore?: number; name?: string; skills?: string[]; targetCity?: string; targetPosition?: string; workYears?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageTalentList = await client.v1.enterprise.talents.list({ request: {} });\n\nconsole.log(resultPageTalentList);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/talents \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.talents.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageTalentList = await client.v1.enterprise.talents.list({ request: {} });\n\nconsole.log(resultPageTalentList.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/enterprise/talents/{talentId}',
    httpMethod: 'get',
    summary: '获取人才详情',
    description: '获取指定人才的详细信息',
    stainlessPath: '(resource) v1.enterprise.talents > (method) retrieve',
    qualified: 'client.v1.enterprise.talents.retrieve',
    params: ['talentId: number;'],
    response:
      '{ code?: number; data?: { id?: string; applicationStatus?: string; avatar?: string; certificates?: string[]; education?: string; educationHistory?: { degree?: string; endDate?: string; major?: string; school?: string; startDate?: string; }[]; entryTime?: string; expectedSalary?: string; gender?: number; hasApplied?: boolean; isFavorite?: boolean; jobExpectation?: { cities?: string[]; jobType?: string; positions?: string[]; salaryRange?: string; }; jobStatus?: string; name?: string; projectExperience?: { description?: string; endDate?: string; name?: string; role?: string; startDate?: string; }[]; skills?: string[]; targetCity?: string; targetPosition?: string; workExperience?: { company?: string; description?: string; endDate?: string; position?: string; startDate?: string; }[]; workYears?: string; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.enterprise.talents.retrieve(talentId: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/enterprise/talents/{talentId}`\n\n获取指定人才的详细信息\n\n### Parameters\n\n- `talentId: number`\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; applicationStatus?: string; avatar?: string; certificates?: string[]; education?: string; educationHistory?: { degree?: string; endDate?: string; major?: string; school?: string; startDate?: string; }[]; entryTime?: string; expectedSalary?: string; gender?: number; hasApplied?: boolean; isFavorite?: boolean; jobExpectation?: { cities?: string[]; jobType?: string; positions?: string[]; salaryRange?: string; }; jobStatus?: string; name?: string; projectExperience?: { description?: string; endDate?: string; name?: string; role?: string; startDate?: string; }[]; skills?: string[]; targetCity?: string; targetPosition?: string; workExperience?: { company?: string; description?: string; endDate?: string; position?: string; startDate?: string; }[]; workYears?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; applicationStatus?: string; avatar?: string; certificates?: string[]; education?: string; educationHistory?: { degree?: string; endDate?: string; major?: string; school?: string; startDate?: string; }[]; entryTime?: string; expectedSalary?: string; gender?: number; hasApplied?: boolean; isFavorite?: boolean; jobExpectation?: { cities?: string[]; jobType?: string; positions?: string[]; salaryRange?: string; }; jobStatus?: string; name?: string; projectExperience?: { description?: string; endDate?: string; name?: string; role?: string; startDate?: string; }[]; skills?: string[]; targetCity?: string; targetPosition?: string; workExperience?: { company?: string; description?: string; endDate?: string; position?: string; startDate?: string; }[]; workYears?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst talent = await client.v1.enterprise.talents.retrieve(0);\n\nconsole.log(talent);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/talents/$TALENT_ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.talents.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst talent = await client.v1.enterprise.talents.retrieve(0);\n\nconsole.log(talent.code);",
      },
    },
  },
  {
    name: 'list_favorites',
    endpoint: '/api/v1/enterprise/talents/favorites',
    httpMethod: 'get',
    summary: '获取收藏人才列表',
    description: '分页获取当前用户收藏的人才列表',
    stainlessPath: '(resource) v1.enterprise.talents > (method) list_favorites',
    qualified: 'client.v1.enterprise.talents.listFavorites',
    params: ['page?: number;', 'pageSize?: number;'],
    response:
      '{ code?: number; data?: { list?: talent_list_response[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list_favorites\n\n`client.v1.enterprise.talents.listFavorites(page?: number, pageSize?: number): { code?: number; data?: page_result_talent_list_response; message?: string; }`\n\n**get** `/api/v1/enterprise/talents/favorites`\n\n分页获取当前用户收藏的人才列表\n\n### Parameters\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页数量，默认20\n\n### Returns\n\n- `{ code?: number; data?: { list?: talent_list_response[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; avatar?: string; currentCompany?: string; currentPosition?: string; education?: string; entryTime?: string; expectedSalary?: string; gender?: number; isFavorite?: boolean; jobStatus?: string; lastActiveAt?: string; matchScore?: number; name?: string; skills?: string[]; targetCity?: string; targetPosition?: string; workYears?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageTalentList = await client.v1.enterprise.talents.listFavorites();\n\nconsole.log(resultPageTalentList);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/talents/favorites \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.talents.listFavorites',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageTalentList = await client.v1.enterprise.talents.listFavorites();\n\nconsole.log(resultPageTalentList.code);",
      },
    },
  },
  {
    name: 'add',
    endpoint: '/api/v1/enterprise/talents/{talentId}/favorite',
    httpMethod: 'post',
    summary: '收藏人才',
    description: '收藏指定人才到人才库',
    stainlessPath: '(resource) v1.enterprise.talents.favorite > (method) add',
    qualified: 'client.v1.enterprise.talents.favorite.add',
    params: ['talentId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## add\n\n`client.v1.enterprise.talents.favorite.add(talentId: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/talents/{talentId}/favorite`\n\n收藏指定人才到人才库\n\n### Parameters\n\n- `talentId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.talents.favorite.add(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/talents/$TALENT_ID/favorite \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.talents.favorite.add',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.talents.favorite.add(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'remove',
    endpoint: '/api/v1/enterprise/talents/{talentId}/favorite',
    httpMethod: 'delete',
    summary: '取消收藏人才',
    description: '取消对指定人才的收藏',
    stainlessPath: '(resource) v1.enterprise.talents.favorite > (method) remove',
    qualified: 'client.v1.enterprise.talents.favorite.remove',
    params: ['talentId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## remove\n\n`client.v1.enterprise.talents.favorite.remove(talentId: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/enterprise/talents/{talentId}/favorite`\n\n取消对指定人才的收藏\n\n### Parameters\n\n- `talentId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.talents.favorite.remove(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/talents/$TALENT_ID/favorite \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.talents.favorite.remove',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.talents.favorite.remove(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'mark_read',
    endpoint: '/api/v1/enterprise/notifications/{notificationId}/read',
    httpMethod: 'post',
    summary: '标记通知已读',
    description: '标记通知已读',
    stainlessPath: '(resource) v1.enterprise.notifications > (method) mark_read',
    qualified: 'client.v1.enterprise.notifications.markRead',
    params: ['notificationId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## mark_read\n\n`client.v1.enterprise.notifications.markRead(notificationId: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/notifications/{notificationId}/read`\n\n标记通知已读\n\n### Parameters\n\n- `notificationId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.notifications.markRead(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/notifications/$NOTIFICATION_ID/read \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.notifications.markRead',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.notifications.markRead(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'mark_all_read',
    endpoint: '/api/v1/enterprise/notifications/read-all',
    httpMethod: 'post',
    summary: '标记所有通知已读',
    description: '标记所有通知已读',
    stainlessPath: '(resource) v1.enterprise.notifications > (method) mark_all_read',
    qualified: 'client.v1.enterprise.notifications.markAllRead',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## mark_all_read\n\n`client.v1.enterprise.notifications.markAllRead(): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/notifications/read-all`\n\n标记所有通知已读\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.notifications.markAllRead();\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/notifications/read-all \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.notifications.markAllRead',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.notifications.markAllRead();\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/enterprise/notifications',
    httpMethod: 'get',
    summary: '获取通知列表',
    description: '分页获取当前用户的通知列表',
    stainlessPath: '(resource) v1.enterprise.notifications > (method) list',
    qualified: 'client.v1.enterprise.notifications.list',
    params: ['page?: number;', 'pageSize?: number;'],
    response:
      '{ code?: number; data?: { list?: { id?: string; actionUrl?: string; category?: string; content?: string; createdAt?: string; extraData?: string; isRead?: number; readAt?: string; related?: object; title?: string; type?: string; }[]; pagination?: object; }; message?: string; }',
    markdown:
      "## list\n\n`client.v1.enterprise.notifications.list(page?: number, pageSize?: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/v1/enterprise/notifications`\n\n分页获取当前用户的通知列表\n\n### Parameters\n\n- `page?: number`\n  页码\n\n- `pageSize?: number`\n  每页数量\n\n### Returns\n\n- `{ code?: number; data?: { list?: { id?: string; actionUrl?: string; category?: string; content?: string; createdAt?: string; extraData?: string; isRead?: number; readAt?: string; related?: object; title?: string; type?: string; }[]; pagination?: object; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: { id?: string; actionUrl?: string; category?: string; content?: string; createdAt?: string; extraData?: string; isRead?: number; readAt?: string; related?: { positionId?: string; positionName?: string; resumeId?: string; scheduleId?: string; talentName?: string; }; title?: string; type?: string; }[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultNotification = await client.v1.enterprise.notifications.list();\n\nconsole.log(resultPageResultNotification);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/notifications \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.notifications.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultNotification = await client.v1.enterprise.notifications.list();\n\nconsole.log(resultPageResultNotification.code);",
      },
    },
  },
  {
    name: 'statistics',
    endpoint: '/api/v1/enterprise/notifications/stats',
    httpMethod: 'get',
    summary: '获取通知统计',
    description: '获取通知统计数据',
    stainlessPath: '(resource) v1.enterprise.notifications > (method) statistics',
    qualified: 'client.v1.enterprise.notifications.statistics',
    response:
      '{ code?: number; data?: { interviewRemind?: number; resumeNew?: number; systemNotice?: number; total?: number; unread?: number; }; message?: string; }',
    markdown:
      "## statistics\n\n`client.v1.enterprise.notifications.statistics(): { code?: number; data?: notification_stats_response; message?: string; }`\n\n**get** `/api/v1/enterprise/notifications/stats`\n\n获取通知统计数据\n\n### Returns\n\n- `{ code?: number; data?: { interviewRemind?: number; resumeNew?: number; systemNotice?: number; total?: number; unread?: number; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { interviewRemind?: number; resumeNew?: number; systemNotice?: number; total?: number; unread?: number; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultNotificationStats = await client.v1.enterprise.notifications.statistics();\n\nconsole.log(resultNotificationStats);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/notifications/stats \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.notifications.statistics',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultNotificationStats = await client.v1.enterprise.notifications.statistics();\n\nconsole.log(resultNotificationStats.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/enterprise/notifications/{notificationId}',
    httpMethod: 'delete',
    summary: '删除通知',
    description: '删除通知',
    stainlessPath: '(resource) v1.enterprise.notifications > (method) delete',
    qualified: 'client.v1.enterprise.notifications.delete',
    params: ['notificationId: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.v1.enterprise.notifications.delete(notificationId: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/v1/enterprise/notifications/{notificationId}`\n\n删除通知\n\n### Parameters\n\n- `notificationId: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.notifications.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/notifications/$NOTIFICATION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.notifications.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.notifications.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'upload_image',
    endpoint: '/api/v1/enterprise/files/image',
    httpMethod: 'post',
    summary: '上传图片',
    description: '上传图片文件，支持 JPG、PNG、GIF、WebP',
    stainlessPath: '(resource) v1.enterprise.files > (method) upload_image',
    qualified: 'client.v1.enterprise.files.uploadImage',
    params: ['file: string;', 'type?: string;'],
    response:
      '{ code?: number; data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }; message?: string; }',
    markdown:
      "## upload_image\n\n`client.v1.enterprise.files.uploadImage(file: string, type?: string): { code?: number; data?: upload_response; message?: string; }`\n\n**post** `/api/v1/enterprise/files/image`\n\n上传图片文件，支持 JPG、PNG、GIF、WebP\n\n### Parameters\n\n- `file: string`\n  图片文件\n\n- `type?: string`\n  类型: avatar/logo/license/screenshot\n\n### Returns\n\n- `{ code?: number; data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultUpload = await client.v1.enterprise.files.uploadImage({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultUpload);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/v1/enterprise/files/image \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.v1.enterprise.files.uploadImage',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultUpload = await client.v1.enterprise.files.uploadImage({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultUpload.code);",
      },
    },
  },
  {
    name: 'upload_file',
    endpoint: '/api/v1/enterprise/files/file',
    httpMethod: 'post',
    summary: '上传文件',
    description: '上传普通文件',
    stainlessPath: '(resource) v1.enterprise.files > (method) upload_file',
    qualified: 'client.v1.enterprise.files.uploadFile',
    params: ['file: string;'],
    response:
      '{ code?: number; data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }; message?: string; }',
    markdown:
      "## upload_file\n\n`client.v1.enterprise.files.uploadFile(file: string): { code?: number; data?: upload_response; message?: string; }`\n\n**post** `/api/v1/enterprise/files/file`\n\n上传普通文件\n\n### Parameters\n\n- `file: string`\n  文件\n\n### Returns\n\n- `{ code?: number; data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultUpload = await client.v1.enterprise.files.uploadFile({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultUpload);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/v1/enterprise/files/file \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.v1.enterprise.files.uploadFile',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultUpload = await client.v1.enterprise.files.uploadFile({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultUpload.code);",
      },
    },
  },
  {
    name: 'register',
    endpoint: '/api/v1/enterprise/auth/register',
    httpMethod: 'post',
    summary: '用户注册',
    description: '新用户注册',
    stainlessPath: '(resource) v1.enterprise.auth > (method) register',
    qualified: 'client.v1.enterprise.auth.register',
    params: ['code: string;', 'name: string;', 'password: string;', 'phone: string;'],
    response:
      '{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }',
    markdown:
      "## register\n\n`client.v1.enterprise.auth.register(code: string, name: string, password: string, phone: string): { code?: number; data?: login_response; message?: string; }`\n\n**post** `/api/v1/enterprise/auth/register`\n\n新用户注册\n\n### Parameters\n\n- `code: string`\n  短信验证码\n\n- `name: string`\n  姓名\n\n- `password: string`\n  密码\n\n- `phone: string`\n  手机号\n\n### Returns\n\n- `{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: { id?: string; name?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultLogin = await client.v1.enterprise.auth.register({\n  code: '1234',\n  name: '张三',\n  password: 'password123',\n  phone: '13800138000',\n});\n\nconsole.log(resultLogin);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/auth/register \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "code": "1234",\n          "name": "张三",\n          "password": "password123",\n          "phone": "13800138000"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.auth.register',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultLogin = await client.v1.enterprise.auth.register({\n  code: '1234',\n  name: '张三',\n  password: 'password123',\n  phone: '13800138000',\n});\n\nconsole.log(resultLogin.code);",
      },
    },
  },
  {
    name: 'refresh',
    endpoint: '/api/v1/enterprise/auth/refresh',
    httpMethod: 'post',
    summary: '刷新Token（别名）',
    description: '兼容 /refresh 路径',
    stainlessPath: '(resource) v1.enterprise.auth > (method) refresh',
    qualified: 'client.v1.enterprise.auth.refresh',
    params: ['refreshToken: string;'],
    response:
      '{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }',
    markdown:
      "## refresh\n\n`client.v1.enterprise.auth.refresh(refreshToken: string): { code?: number; data?: login_response; message?: string; }`\n\n**post** `/api/v1/enterprise/auth/refresh`\n\n兼容 /refresh 路径\n\n### Parameters\n\n- `refreshToken: string`\n  刷新令牌\n\n### Returns\n\n- `{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: { id?: string; name?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultLogin = await client.v1.enterprise.auth.refresh({ refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' });\n\nconsole.log(resultLogin);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/auth/refresh \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.auth.refresh',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultLogin = await client.v1.enterprise.auth.refresh({\n  refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',\n});\n\nconsole.log(resultLogin.code);",
      },
    },
  },
  {
    name: 'logout',
    endpoint: '/api/v1/enterprise/auth/logout',
    httpMethod: 'post',
    summary: '退出登录',
    description: '用户退出登录',
    stainlessPath: '(resource) v1.enterprise.auth > (method) logout',
    qualified: 'client.v1.enterprise.auth.logout',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## logout\n\n`client.v1.enterprise.auth.logout(): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/auth/logout`\n\n用户退出登录\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.v1.enterprise.auth.logout();\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/auth/logout \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.v1.enterprise.auth.logout',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.v1.enterprise.auth.logout();\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'enterprise_login',
    endpoint: '/api/v1/enterprise/auth/login',
    httpMethod: 'post',
    summary: '密码登录',
    description: '使用手机号和密码进行登录',
    stainlessPath: '(resource) v1.enterprise.auth > (method) enterprise_login',
    qualified: 'client.v1.enterprise.auth.enterpriseLogin',
    params: ['password: string;', 'phone: string;'],
    response:
      '{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }',
    markdown:
      "## enterprise_login\n\n`client.v1.enterprise.auth.enterpriseLogin(password: string, phone: string): { code?: number; data?: login_response; message?: string; }`\n\n**post** `/api/v1/enterprise/auth/login`\n\n使用手机号和密码进行登录\n\n### Parameters\n\n- `password: string`\n  密码（短信登录时传验证码）\n\n- `phone: string`\n  手机号\n\n### Returns\n\n- `{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: { id?: string; name?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultLogin = await client.v1.enterprise.auth.enterpriseLogin({ password: 'password123', phone: '13800138000' });\n\nconsole.log(resultLogin);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/auth/login \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "password": "password123",\n          "phone": "13800138000"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.auth.enterpriseLogin',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultLogin = await client.v1.enterprise.auth.enterpriseLogin({\n  password: 'password123',\n  phone: '13800138000',\n});\n\nconsole.log(resultLogin.code);",
      },
    },
  },
  {
    name: 'refresh',
    endpoint: '/api/v1/enterprise/auth/token/refresh',
    httpMethod: 'post',
    summary: '刷新Token',
    description: '使用刷新令牌获取新的访问令牌',
    stainlessPath: '(resource) v1.enterprise.auth.token > (method) refresh',
    qualified: 'client.v1.enterprise.auth.token.refresh',
    params: ['refreshToken: string;'],
    response:
      '{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }',
    markdown:
      "## refresh\n\n`client.v1.enterprise.auth.token.refresh(refreshToken: string): { code?: number; data?: login_response; message?: string; }`\n\n**post** `/api/v1/enterprise/auth/token/refresh`\n\n使用刷新令牌获取新的访问令牌\n\n### Parameters\n\n- `refreshToken: string`\n  刷新令牌\n\n### Returns\n\n- `{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: { id?: string; name?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultLogin = await client.v1.enterprise.auth.token.refresh({ refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' });\n\nconsole.log(resultLogin);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/auth/token/refresh \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.auth.token.refresh',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultLogin = await client.v1.enterprise.auth.token.refresh({\n  refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',\n});\n\nconsole.log(resultLogin.code);",
      },
    },
  },
  {
    name: 'send',
    endpoint: '/api/v1/enterprise/auth/sms/send',
    httpMethod: 'post',
    summary: '发送短信验证码',
    description: '发送短信验证码到指定手机号',
    stainlessPath: '(resource) v1.enterprise.auth.sms > (method) send',
    qualified: 'client.v1.enterprise.auth.sms.send',
    params: ['phone: string;', "type: 'login,register,reset_password';"],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## send\n\n`client.v1.enterprise.auth.sms.send(phone: string, type: 'login,register,reset_password'): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/v1/enterprise/auth/sms/send`\n\n发送短信验证码到指定手机号\n\n### Parameters\n\n- `phone: string`\n  手机号\n\n- `type: 'login,register,reset_password'`\n  验证码类型\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.v1.enterprise.auth.sms.send({ phone: '13800138000', type: 'login,register,reset_password' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/auth/sms/send \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "phone": "13800138000",\n          "type": "login,register,reset_password"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.auth.sms.send',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.v1.enterprise.auth.sms.send({\n  phone: '13800138000',\n  type: 'login,register,reset_password',\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'login',
    endpoint: '/api/v1/enterprise/auth/sms/login',
    httpMethod: 'post',
    summary: '短信验证码登录（别名）',
    description: '兼容 /sms/login 路径',
    stainlessPath: '(resource) v1.enterprise.auth.sms > (method) login',
    qualified: 'client.v1.enterprise.auth.sms.login',
    params: ['password: string;', 'phone: string;'],
    response:
      '{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }',
    markdown:
      "## login\n\n`client.v1.enterprise.auth.sms.login(password: string, phone: string): { code?: number; data?: login_response; message?: string; }`\n\n**post** `/api/v1/enterprise/auth/sms/login`\n\n兼容 /sms/login 路径\n\n### Parameters\n\n- `password: string`\n  密码（短信登录时传验证码）\n\n- `phone: string`\n  手机号\n\n### Returns\n\n- `{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: { id?: string; name?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultLogin = await client.v1.enterprise.auth.sms.login({ password: 'password123', phone: '13800138000' });\n\nconsole.log(resultLogin);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/auth/sms/login \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "password": "password123",\n          "phone": "13800138000"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.auth.sms.login',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultLogin = await client.v1.enterprise.auth.sms.login({\n  password: 'password123',\n  phone: '13800138000',\n});\n\nconsole.log(resultLogin.code);",
      },
    },
  },
  {
    name: 'sms',
    endpoint: '/api/v1/enterprise/auth/login/sms',
    httpMethod: 'post',
    summary: '短信验证码登录',
    description: '使用手机号和短信验证码进行登录',
    stainlessPath: '(resource) v1.enterprise.auth.login > (method) sms',
    qualified: 'client.v1.enterprise.auth.login.sms',
    params: ['password: string;', 'phone: string;'],
    response:
      '{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }',
    markdown:
      "## sms\n\n`client.v1.enterprise.auth.login.sms(password: string, phone: string): { code?: number; data?: login_response; message?: string; }`\n\n**post** `/api/v1/enterprise/auth/login/sms`\n\n使用手机号和短信验证码进行登录\n\n### Parameters\n\n- `password: string`\n  密码（短信登录时传验证码）\n\n- `phone: string`\n  手机号\n\n### Returns\n\n- `{ code?: number; data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: user_info; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { accessToken?: string; expiresIn?: number; refreshToken?: string; user?: { id?: string; name?: string; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultLogin = await client.v1.enterprise.auth.login.sms({ password: 'password123', phone: '13800138000' });\n\nconsole.log(resultLogin);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/v1/enterprise/auth/login/sms \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "password": "password123",\n          "phone": "13800138000"\n        }\'',
      },
      typescript: {
        method: 'client.v1.enterprise.auth.login.sms',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultLogin = await client.v1.enterprise.auth.login.sms({\n  password: 'password123',\n  phone: '13800138000',\n});\n\nconsole.log(resultLogin.code);",
      },
    },
  },
  {
    name: 'list_permissions',
    endpoint: '/api/admin/permissions',
    httpMethod: 'get',
    summary: '获取权限树',
    description: '获取所有权限的树形结构',
    stainlessPath: '(resource) admin > (method) list_permissions',
    qualified: 'client.admin.listPermissions',
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## list_permissions\n\n`client.admin.listPermissions(): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/admin/permissions`\n\n获取所有权限的树形结构\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.admin.listPermissions();\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/permissions \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.listPermissions',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.admin.listPermissions();\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/users/{id}',
    httpMethod: 'get',
    summary: '获取用户详情',
    description: '获取指定管理员详情',
    stainlessPath: '(resource) admin.users > (method) retrieve',
    qualified: 'client.admin.users.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.users.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/users/{id}`\n\n获取指定管理员详情\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.users.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/users/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.users.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.users.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/admin/users/{id}',
    httpMethod: 'put',
    summary: '修改用户',
    description: '修改管理员信息',
    stainlessPath: '(resource) admin.users > (method) update',
    qualified: 'client.admin.users.update',
    params: ['id: number;', 'phone: string;', 'roleId: number;', 'username: string;', 'password?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update\n\n`client.admin.users.update(id: number, phone: string, roleId: number, username: string, password?: string): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/users/{id}`\n\n修改管理员信息\n\n### Parameters\n\n- `id: number`\n\n- `phone: string`\n  手机号\n\n- `roleId: number`\n  角色ID\n\n- `username: string`\n  用户名\n\n- `password?: string`\n  密码（新增必填，修改可选）\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.users.update(0, {\n  phone: 'phone',\n  roleId: 0,\n  username: 'username',\n});\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/users/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "phone": "phone",\n          "roleId": 0,\n          "username": "username"\n        }\'',
      },
      typescript: {
        method: 'client.admin.users.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.users.update(0, {\n  phone: 'phone',\n  roleId: 0,\n  username: 'username',\n});\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/users',
    httpMethod: 'get',
    summary: '获取用户列表',
    description: '分页获取后台管理员列表',
    stainlessPath: '(resource) admin.users > (method) list',
    qualified: 'client.admin.users.list',
    params: [
      'keyword?: string;',
      'page?: number;',
      'pageSize?: number;',
      'roleId?: number;',
      'status?: string;',
    ],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.users.list(keyword?: string, page?: number, pageSize?: number, roleId?: number, status?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/users`\n\n分页获取后台管理员列表\n\n### Parameters\n\n- `keyword?: string`\n  搜索关键词(用户名/手机号)\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页条数，默认10\n\n- `roleId?: number`\n  角色ID\n\n- `status?: string`\n  状态: enabled/disabled/all\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.users.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/users \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.users.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.users.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/admin/users',
    httpMethod: 'post',
    summary: '新增用户',
    description: '创建新的后台管理员账号',
    stainlessPath: '(resource) admin.users > (method) create',
    qualified: 'client.admin.users.create',
    params: ['phone: string;', 'roleId: number;', 'username: string;', 'password?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## create\n\n`client.admin.users.create(phone: string, roleId: number, username: string, password?: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/users`\n\n创建新的后台管理员账号\n\n### Parameters\n\n- `phone: string`\n  手机号\n\n- `roleId: number`\n  角色ID\n\n- `username: string`\n  用户名\n\n- `password?: string`\n  密码（新增必填，修改可选）\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.users.create({\n  phone: 'phone',\n  roleId: 0,\n  username: 'username',\n});\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/users \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "phone": "phone",\n          "roleId": 0,\n          "username": "username"\n        }\'',
      },
      typescript: {
        method: 'client.admin.users.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.users.create({\n  phone: 'phone',\n  roleId: 0,\n  username: 'username',\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'reset_password',
    endpoint: '/api/admin/users/{id}/reset-password',
    httpMethod: 'post',
    summary: '重置用户密码',
    description: '重置管理员密码',
    stainlessPath: '(resource) admin.users > (method) reset_password',
    qualified: 'client.admin.users.resetPassword',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## reset_password\n\n`client.admin.users.resetPassword(id: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/users/{id}/reset-password`\n\n重置管理员密码\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringString = await client.admin.users.resetPassword(0);\n\nconsole.log(resultMapStringString);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/users/$ID/reset-password \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.users.resetPassword',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringString = await client.admin.users.resetPassword(0);\n\nconsole.log(resultMapStringString.code);",
      },
    },
  },
  {
    name: 'enable',
    endpoint: '/api/admin/users/{id}/enable',
    httpMethod: 'post',
    summary: '启用用户',
    description: '启用管理员账号',
    stainlessPath: '(resource) admin.users > (method) enable',
    qualified: 'client.admin.users.enable',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## enable\n\n`client.admin.users.enable(id: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/users/{id}/enable`\n\n启用管理员账号\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.users.enable(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/users/$ID/enable \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.users.enable',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.users.enable(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'disable',
    endpoint: '/api/admin/users/{id}/disable',
    httpMethod: 'post',
    summary: '禁用用户',
    description: '禁用管理员账号',
    stainlessPath: '(resource) admin.users > (method) disable',
    qualified: 'client.admin.users.disable',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## disable\n\n`client.admin.users.disable(id: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/users/{id}/disable`\n\n禁用管理员账号\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.users.disable(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/users/$ID/disable \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.users.disable',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.users.disable(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'get_logs',
    endpoint: '/api/admin/users/{id}/logs',
    httpMethod: 'get',
    summary: '获取用户操作日志',
    description: '获取指定用户的操作日志',
    stainlessPath: '(resource) admin.users > (method) get_logs',
    qualified: 'client.admin.users.getLogs',
    params: [
      'id: number;',
      'endDate?: string;',
      'page?: number;',
      'page_size?: number;',
      'startDate?: string;',
    ],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## get_logs\n\n`client.admin.users.getLogs(id: number, endDate?: string, page?: number, page_size?: number, startDate?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/users/{id}/logs`\n\n获取指定用户的操作日志\n\n### Parameters\n\n- `id: number`\n\n- `endDate?: string`\n  结束日期\n\n- `page?: number`\n  页码\n\n- `page_size?: number`\n  每页条数\n\n- `startDate?: string`\n  开始日期\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.users.getLogs(0);\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/users/$ID/logs \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.users.getLogs',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.users.getLogs(0);\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/roles/{id}',
    httpMethod: 'get',
    summary: '获取角色详情',
    description: '获取角色详情及权限',
    stainlessPath: '(resource) admin.roles > (method) retrieve',
    qualified: 'client.admin.roles.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.roles.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/roles/{id}`\n\n获取角色详情及权限\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.roles.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/roles/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.roles.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.roles.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/admin/roles/{id}',
    httpMethod: 'put',
    summary: '修改角色',
    description: '修改角色信息',
    stainlessPath: '(resource) admin.roles > (method) update',
    qualified: 'client.admin.roles.update',
    params: ['id: number;', 'name: string;', 'description?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update\n\n`client.admin.roles.update(id: number, name: string, description?: string): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/roles/{id}`\n\n修改角色信息\n\n### Parameters\n\n- `id: number`\n\n- `name: string`\n  角色名称\n\n- `description?: string`\n  角色描述\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.roles.update(0, { name: 'name' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/roles/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "name": "name"\n        }\'',
      },
      typescript: {
        method: 'client.admin.roles.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.roles.update(0, { name: 'name' });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/admin/roles/{id}',
    httpMethod: 'delete',
    summary: '删除角色',
    description: '删除角色（存在关联用户时不可删除）',
    stainlessPath: '(resource) admin.roles > (method) delete',
    qualified: 'client.admin.roles.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.admin.roles.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/admin/roles/{id}`\n\n删除角色（存在关联用户时不可删除）\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.roles.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/roles/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.roles.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.roles.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/roles',
    httpMethod: 'get',
    summary: '获取角色列表',
    description: '获取所有角色列表',
    stainlessPath: '(resource) admin.roles > (method) list',
    qualified: 'client.admin.roles.list',
    params: ['keyword?: string;', 'status?: string;'],
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## list\n\n`client.admin.roles.list(keyword?: string, status?: string): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/admin/roles`\n\n获取所有角色列表\n\n### Parameters\n\n- `keyword?: string`\n  搜索关键词\n\n- `status?: string`\n  状态: enabled/disabled/all\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.admin.roles.list();\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/roles \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.roles.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.admin.roles.list();\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/admin/roles',
    httpMethod: 'post',
    summary: '新增角色',
    description: '创建新角色',
    stainlessPath: '(resource) admin.roles > (method) create',
    qualified: 'client.admin.roles.create',
    params: ['name: string;', 'description?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## create\n\n`client.admin.roles.create(name: string, description?: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/roles`\n\n创建新角色\n\n### Parameters\n\n- `name: string`\n  角色名称\n\n- `description?: string`\n  角色描述\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.roles.create({ name: 'name' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/roles \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "name": "name"\n        }\'',
      },
      typescript: {
        method: 'client.admin.roles.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.roles.create({ name: 'name' });\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/roles/{id}/permissions',
    httpMethod: 'get',
    summary: '获取角色权限',
    description: '获取指定角色权限详情',
    stainlessPath: '(resource) admin.roles.permissions > (method) retrieve',
    qualified: 'client.admin.roles.permissions.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.roles.permissions.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/roles/{id}/permissions`\n\n获取指定角色权限详情\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.roles.permissions.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/roles/$ID/permissions \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.roles.permissions.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.roles.permissions.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/admin/roles/{id}/permissions',
    httpMethod: 'put',
    summary: '更新角色权限',
    description: '更新角色的权限分配',
    stainlessPath: '(resource) admin.roles.permissions > (method) update',
    qualified: 'client.admin.roles.permissions.update',
    params: ['id: number;', 'permissions: string[];'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update\n\n`client.admin.roles.permissions.update(id: number, permissions: string[]): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/roles/{id}/permissions`\n\n更新角色的权限分配\n\n### Parameters\n\n- `id: number`\n\n- `permissions: string[]`\n  权限编码列表\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.roles.permissions.update(0, { permissions: ['string'] });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/roles/$ID/permissions \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "permissions": [\n            "string"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.admin.roles.permissions.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.roles.permissions.update(0, { permissions: ['string'] });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/admin/config/provinces/{id}',
    httpMethod: 'put',
    summary: '修改省份',
    description: '修改省份信息',
    stainlessPath: '(resource) admin.config.provinces > (method) update',
    qualified: 'client.admin.config.provinces.update',
    params: ['id: number;', 'code: string;', 'name: string;', 'sort: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update\n\n`client.admin.config.provinces.update(id: number, code: string, name: string, sort: number): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/config/provinces/{id}`\n\n修改省份信息\n\n### Parameters\n\n- `id: number`\n\n- `code: string`\n  省份编码\n\n- `name: string`\n  省份名称\n\n- `sort: number`\n  排序\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.provinces.update(0, {\n  code: 'code',\n  name: 'name',\n  sort: 0,\n});\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/provinces/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "code": "code",\n          "name": "name",\n          "sort": 0\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.provinces.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.provinces.update(0, {\n  code: 'code',\n  name: 'name',\n  sort: 0,\n});\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/admin/config/provinces/{id}',
    httpMethod: 'delete',
    summary: '删除省份',
    description: '删除省份（存在关联城市时不可删除）',
    stainlessPath: '(resource) admin.config.provinces > (method) delete',
    qualified: 'client.admin.config.provinces.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.admin.config.provinces.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/admin/config/provinces/{id}`\n\n删除省份（存在关联城市时不可删除）\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.provinces.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/provinces/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.provinces.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.provinces.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/config/provinces',
    httpMethod: 'get',
    summary: '获取省份列表',
    description: '获取所有省份列表',
    stainlessPath: '(resource) admin.config.provinces > (method) list',
    qualified: 'client.admin.config.provinces.list',
    params: ['keyword?: string;'],
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## list\n\n`client.admin.config.provinces.list(keyword?: string): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/admin/config/provinces`\n\n获取所有省份列表\n\n### Parameters\n\n- `keyword?: string`\n  搜索关键词\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.admin.config.provinces.list();\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/provinces \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.provinces.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.admin.config.provinces.list();\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/admin/config/provinces',
    httpMethod: 'post',
    summary: '新增省份',
    description: '添加新省份',
    stainlessPath: '(resource) admin.config.provinces > (method) create',
    qualified: 'client.admin.config.provinces.create',
    params: ['code: string;', 'name: string;', 'sort: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## create\n\n`client.admin.config.provinces.create(code: string, name: string, sort: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/config/provinces`\n\n添加新省份\n\n### Parameters\n\n- `code: string`\n  省份编码\n\n- `name: string`\n  省份名称\n\n- `sort: number`\n  排序\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.config.provinces.create({\n  code: 'code',\n  name: 'name',\n  sort: 0,\n});\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/provinces \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "code": "code",\n          "name": "name",\n          "sort": 0\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.provinces.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.config.provinces.create({\n  code: 'code',\n  name: 'name',\n  sort: 0,\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve_privacy_policy',
    endpoint: '/api/admin/config/privacy-policy',
    httpMethod: 'get',
    summary: '获取隐私政策',
    description: '获取隐私政策内容',
    stainlessPath: '(resource) admin.config.privacy_policy > (method) retrieve_privacy_policy',
    qualified: 'client.admin.config.privacyPolicy.retrievePrivacyPolicy',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve_privacy_policy\n\n`client.admin.config.privacyPolicy.retrievePrivacyPolicy(): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/config/privacy-policy`\n\n获取隐私政策内容\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.config.privacyPolicy.retrievePrivacyPolicy();\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/privacy-policy \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.privacyPolicy.retrievePrivacyPolicy',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.config.privacyPolicy.retrievePrivacyPolicy();\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update_privacy_policy',
    endpoint: '/api/admin/config/privacy-policy',
    httpMethod: 'put',
    summary: '更新隐私政策',
    description: '更新隐私政策内容',
    stainlessPath: '(resource) admin.config.privacy_policy > (method) update_privacy_policy',
    qualified: 'client.admin.config.privacyPolicy.updatePrivacyPolicy',
    params: ['content: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_privacy_policy\n\n`client.admin.config.privacyPolicy.updatePrivacyPolicy(content: string): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/config/privacy-policy`\n\n更新隐私政策内容\n\n### Parameters\n\n- `content: string`\n  隐私政策内容\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.privacyPolicy.updatePrivacyPolicy({ content: 'content' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/privacy-policy \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "content": "content"\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.privacyPolicy.updatePrivacyPolicy',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.privacyPolicy.updatePrivacyPolicy({\n  content: 'content',\n});\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/admin/config/job-types/{id}',
    httpMethod: 'put',
    summary: '修改职位类型',
    description: '修改职位类型',
    stainlessPath: '(resource) admin.config.job_types > (method) update',
    qualified: 'client.admin.config.jobTypes.update',
    params: ['id: number;', 'body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update\n\n`client.admin.config.jobTypes.update(id: number, body: object): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/config/job-types/{id}`\n\n修改职位类型\n\n### Parameters\n\n- `id: number`\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.jobTypes.update(0, { body: { foo: {} } });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/job-types/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.jobTypes.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.jobTypes.update(0, { body: { foo: {} } });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/admin/config/job-types/{id}',
    httpMethod: 'delete',
    summary: '删除职位类型',
    description: '删除职位类型',
    stainlessPath: '(resource) admin.config.job_types > (method) delete',
    qualified: 'client.admin.config.jobTypes.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.admin.config.jobTypes.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/admin/config/job-types/{id}`\n\n删除职位类型\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.jobTypes.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/job-types/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.jobTypes.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.jobTypes.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/admin/config/job-subcategories/{id}',
    httpMethod: 'put',
    summary: '修改职位小类',
    description: '修改职位小类',
    stainlessPath: '(resource) admin.config.job_subcategories > (method) update',
    qualified: 'client.admin.config.jobSubcategories.update',
    params: ['id: number;', 'body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update\n\n`client.admin.config.jobSubcategories.update(id: number, body: object): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/config/job-subcategories/{id}`\n\n修改职位小类\n\n### Parameters\n\n- `id: number`\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.jobSubcategories.update(0, { body: { foo: {} } });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/job-subcategories/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.jobSubcategories.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.jobSubcategories.update(0, { body: { foo: {} } });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/admin/config/job-subcategories/{id}',
    httpMethod: 'delete',
    summary: '删除职位小类',
    description: '删除职位小类',
    stainlessPath: '(resource) admin.config.job_subcategories > (method) delete',
    qualified: 'client.admin.config.jobSubcategories.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.admin.config.jobSubcategories.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/admin/config/job-subcategories/{id}`\n\n删除职位小类\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.jobSubcategories.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/job-subcategories/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.jobSubcategories.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.jobSubcategories.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/config/job-subcategories/{subcategoryId}/types',
    httpMethod: 'get',
    summary: '获取职位类型列表',
    description: '获取职位类型列表',
    stainlessPath: '(resource) admin.config.job_subcategories.types > (method) list',
    qualified: 'client.admin.config.jobSubcategories.types.list',
    params: ['subcategoryId: number;'],
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## list\n\n`client.admin.config.jobSubcategories.types.list(subcategoryId: number): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/admin/config/job-subcategories/{subcategoryId}/types`\n\n获取职位类型列表\n\n### Parameters\n\n- `subcategoryId: number`\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.admin.config.jobSubcategories.types.list(0);\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/job-subcategories/$SUBCATEGORY_ID/types \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.jobSubcategories.types.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.admin.config.jobSubcategories.types.list(0);\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/admin/config/job-subcategories/{subcategoryId}/types',
    httpMethod: 'post',
    summary: '新增职位类型',
    description: '新增职位类型',
    stainlessPath: '(resource) admin.config.job_subcategories.types > (method) create',
    qualified: 'client.admin.config.jobSubcategories.types.create',
    params: ['subcategoryId: number;', 'body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## create\n\n`client.admin.config.jobSubcategories.types.create(subcategoryId: number, body: object): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/config/job-subcategories/{subcategoryId}/types`\n\n新增职位类型\n\n### Parameters\n\n- `subcategoryId: number`\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.config.jobSubcategories.types.create(0, { body: { foo: {} } });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/job-subcategories/$SUBCATEGORY_ID/types \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.jobSubcategories.types.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.config.jobSubcategories.types.create(0, {\n  body: { foo: {} },\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/admin/config/job-categories/{id}',
    httpMethod: 'put',
    summary: '修改职位大类',
    description: '修改职位大类',
    stainlessPath: '(resource) admin.config.job_categories > (method) update',
    qualified: 'client.admin.config.jobCategories.update',
    params: ['id: number;', 'body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update\n\n`client.admin.config.jobCategories.update(id: number, body: object): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/config/job-categories/{id}`\n\n修改职位大类\n\n### Parameters\n\n- `id: number`\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.jobCategories.update(0, { body: { foo: {} } });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/job-categories/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.jobCategories.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.jobCategories.update(0, { body: { foo: {} } });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/admin/config/job-categories/{id}',
    httpMethod: 'delete',
    summary: '删除职位大类',
    description: '删除职位大类',
    stainlessPath: '(resource) admin.config.job_categories > (method) delete',
    qualified: 'client.admin.config.jobCategories.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.admin.config.jobCategories.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/admin/config/job-categories/{id}`\n\n删除职位大类\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.jobCategories.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/job-categories/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.jobCategories.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.jobCategories.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'retrieve_job_categories',
    endpoint: '/api/admin/config/job-categories',
    httpMethod: 'get',
    summary: '获取职位大类列表',
    description: '获取职位大类列表',
    stainlessPath: '(resource) admin.config.job_categories > (method) retrieve_job_categories',
    qualified: 'client.admin.config.jobCategories.retrieveJobCategories',
    params: ['keyword?: string;'],
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## retrieve_job_categories\n\n`client.admin.config.jobCategories.retrieveJobCategories(keyword?: string): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/admin/config/job-categories`\n\n获取职位大类列表\n\n### Parameters\n\n- `keyword?: string`\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.admin.config.jobCategories.retrieveJobCategories();\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/job-categories \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.jobCategories.retrieveJobCategories',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.admin.config.jobCategories.retrieveJobCategories();\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'job_categories',
    endpoint: '/api/admin/config/job-categories',
    httpMethod: 'post',
    summary: '新增职位大类',
    description: '新增职位大类',
    stainlessPath: '(resource) admin.config.job_categories > (method) job_categories',
    qualified: 'client.admin.config.jobCategories.jobCategories',
    params: ['body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## job_categories\n\n`client.admin.config.jobCategories.jobCategories(body: object): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/config/job-categories`\n\n新增职位大类\n\n### Parameters\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.config.jobCategories.jobCategories({ body: { foo: {} } });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/job-categories \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.jobCategories.jobCategories',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.config.jobCategories.jobCategories({\n  body: { foo: {} },\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/config/job-categories/{categoryId}/subcategories',
    httpMethod: 'get',
    summary: '获取职位小类列表',
    description: '获取职位小类列表',
    stainlessPath: '(resource) admin.config.job_categories.subcategories > (method) list',
    qualified: 'client.admin.config.jobCategories.subcategories.list',
    params: ['categoryId: number;'],
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## list\n\n`client.admin.config.jobCategories.subcategories.list(categoryId: number): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/admin/config/job-categories/{categoryId}/subcategories`\n\n获取职位小类列表\n\n### Parameters\n\n- `categoryId: number`\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.admin.config.jobCategories.subcategories.list(0);\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/job-categories/$CATEGORY_ID/subcategories \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.jobCategories.subcategories.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.admin.config.jobCategories.subcategories.list(0);\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/admin/config/job-categories/{categoryId}/subcategories',
    httpMethod: 'post',
    summary: '新增职位小类',
    description: '新增职位小类',
    stainlessPath: '(resource) admin.config.job_categories.subcategories > (method) create',
    qualified: 'client.admin.config.jobCategories.subcategories.create',
    params: ['categoryId: number;', 'body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## create\n\n`client.admin.config.jobCategories.subcategories.create(categoryId: number, body: object): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/config/job-categories/{categoryId}/subcategories`\n\n新增职位小类\n\n### Parameters\n\n- `categoryId: number`\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.config.jobCategories.subcategories.create(0, { body: { foo: {} } });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/job-categories/$CATEGORY_ID/subcategories \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.jobCategories.subcategories.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.config.jobCategories.subcategories.create(0, {\n  body: { foo: {} },\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update_hot_positions',
    endpoint: '/api/admin/config/display/hot-positions',
    httpMethod: 'put',
    summary: '更新热门推荐配置',
    description: '更新热门推荐配置',
    stainlessPath: '(resource) admin.config.display > (method) update_hot_positions',
    qualified: 'client.admin.config.display.updateHotPositions',
    params: ['body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_hot_positions\n\n`client.admin.config.display.updateHotPositions(body: object): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/config/display/hot-positions`\n\n更新热门推荐配置\n\n### Parameters\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.display.updateHotPositions({ body: { foo: {} } });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/display/hot-positions \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.display.updateHotPositions',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.display.updateHotPositions({ body: { foo: {} } });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'update_features',
    endpoint: '/api/admin/config/display/features',
    httpMethod: 'put',
    summary: '更新功能入口配置',
    description: '更新功能入口配置',
    stainlessPath: '(resource) admin.config.display > (method) update_features',
    qualified: 'client.admin.config.display.updateFeatures',
    params: ['body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_features\n\n`client.admin.config.display.updateFeatures(body: object): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/config/display/features`\n\n更新功能入口配置\n\n### Parameters\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.display.updateFeatures({ body: { foo: {} } });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/display/features \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.display.updateFeatures',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.display.updateFeatures({ body: { foo: {} } });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/config/display',
    httpMethod: 'get',
    summary: '获取用户端展示配置',
    description: '获取用户端展示配置',
    stainlessPath: '(resource) admin.config.display > (method) list',
    qualified: 'client.admin.config.display.list',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## list\n\n`client.admin.config.display.list(): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/config/display`\n\n获取用户端展示配置\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.config.display.list();\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/display \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.display.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.config.display.list();\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/admin/config/display/banners',
    httpMethod: 'put',
    summary: '更新Banner配置（display）',
    description: '更新Banner配置（display）',
    stainlessPath: '(resource) admin.config.display.banners > (method) create',
    qualified: 'client.admin.config.display.banners.create',
    params: ['banners: object[];'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## create\n\n`client.admin.config.display.banners.create(banners: object[]): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/config/display/banners`\n\n更新Banner配置（display）\n\n### Parameters\n\n- `banners: object[]`\n  banner列表\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.display.banners.create({ banners: [{ foo: {} }] });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/display/banners \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "banners": [\n            {\n              "foo": {}\n            }\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.display.banners.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.display.banners.create({ banners: [{ foo: {} }] });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'upload',
    endpoint: '/api/admin/config/display/banners/upload',
    httpMethod: 'post',
    summary: '上传Banner图片（display）',
    description: '上传Banner图片（display）',
    stainlessPath: '(resource) admin.config.display.banners > (method) upload',
    qualified: 'client.admin.config.display.banners.upload',
    params: ['file: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## upload\n\n`client.admin.config.display.banners.upload(file: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/config/display/banners/upload`\n\n上传Banner图片（display）\n\n### Parameters\n\n- `file: string`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringString = await client.admin.config.display.banners.upload({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultMapStringString);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/admin/config/display/banners/upload \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.admin.config.display.banners.upload',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringString = await client.admin.config.display.banners.upload({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultMapStringString.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/admin/config/dictionary/{type}',
    httpMethod: 'post',
    summary: '新增字典选项',
    description: '向指定类型添加字典选项',
    stainlessPath: '(resource) admin.config.dictionary > (method) update',
    qualified: 'client.admin.config.dictionary.update',
    params: ['type: string;', 'name: string;', 'sort: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update\n\n`client.admin.config.dictionary.update(type: string, name: string, sort: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/config/dictionary/{type}`\n\n向指定类型添加字典选项\n\n### Parameters\n\n- `type: string`\n\n- `name: string`\n  名称\n\n- `sort: number`\n  排序\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.config.dictionary.update('type', { name: 'name', sort: 0 });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/dictionary/$TYPE \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "name": "name",\n          "sort": 0\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.dictionary.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.config.dictionary.update('type', {\n  name: 'name',\n  sort: 0,\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/admin/config/dictionary/{type}/{id}',
    httpMethod: 'delete',
    summary: '删除字典选项',
    description: '删除指定字典选项',
    stainlessPath: '(resource) admin.config.dictionary > (method) delete',
    qualified: 'client.admin.config.dictionary.delete',
    params: ['type: string;', 'id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.admin.config.dictionary.delete(type: string, id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/admin/config/dictionary/{type}/{id}`\n\n删除指定字典选项\n\n### Parameters\n\n- `type: string`\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.dictionary.delete(0, { type: 'type' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/dictionary/$TYPE/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.dictionary.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.dictionary.delete(0, { type: 'type' });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'update_status',
    endpoint: '/api/admin/config/dictionary/{type}/{id}/status',
    httpMethod: 'put',
    summary: '切换字典选项状态',
    description: '切换字典选项状态',
    stainlessPath: '(resource) admin.config.dictionary > (method) update_status',
    qualified: 'client.admin.config.dictionary.updateStatus',
    params: ['type: string;', 'id: number;', 'body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_status\n\n`client.admin.config.dictionary.updateStatus(type: string, id: number, body: object): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/config/dictionary/{type}/{id}/status`\n\n切换字典选项状态\n\n### Parameters\n\n- `type: string`\n\n- `id: number`\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.dictionary.updateStatus(0, {\n  type: 'type',\n  body: { foo: 'string' },\n});\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/dictionary/$TYPE/$ID/status \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": "string"\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.dictionary.updateStatus',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.dictionary.updateStatus(0, {\n  type: 'type',\n  body: { foo: 'string' },\n});\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/config/dictionary/{type}',
    httpMethod: 'get',
    summary: '获取字典选项列表',
    description: '获取指定类型的字典选项',
    stainlessPath: '(resource) admin.config.dictionary > (method) retrieve',
    qualified: 'client.admin.config.dictionary.retrieve',
    params: ['type: string;'],
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.config.dictionary.retrieve(type: string): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/admin/config/dictionary/{type}`\n\n获取指定类型的字典选项\n\n### Parameters\n\n- `type: string`\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.admin.config.dictionary.retrieve('type');\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/dictionary/$TYPE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.dictionary.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.admin.config.dictionary.retrieve('type');\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'retrieve_types',
    endpoint: '/api/admin/config/dictionary/types',
    httpMethod: 'get',
    summary: '获取字典类型列表',
    description: '获取所有字典类型',
    stainlessPath: '(resource) admin.config.dictionary > (method) retrieve_types',
    qualified: 'client.admin.config.dictionary.retrieveTypes',
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## retrieve_types\n\n`client.admin.config.dictionary.retrieveTypes(): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/admin/config/dictionary/types`\n\n获取所有字典类型\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.admin.config.dictionary.retrieveTypes();\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/dictionary/types \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.dictionary.retrieveTypes',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.admin.config.dictionary.retrieveTypes();\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'delete_batch',
    endpoint: '/api/admin/config/dictionary/{type}/batch',
    httpMethod: 'delete',
    summary: '批量删除字典选项',
    description: '批量删除字典选项',
    stainlessPath: '(resource) admin.config.dictionary > (method) delete_batch',
    qualified: 'client.admin.config.dictionary.deleteBatch',
    params: ['type: string;', 'body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete_batch\n\n`client.admin.config.dictionary.deleteBatch(type: string, body: object): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/admin/config/dictionary/{type}/batch`\n\n批量删除字典选项\n\n### Parameters\n\n- `type: string`\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.config.dictionary.deleteBatch('type', { body: { foo: [0] } });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/dictionary/$TYPE/batch \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.dictionary.deleteBatch',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.config.dictionary.deleteBatch('type', {\n  body: { foo: [0] },\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/admin/config/cities/{id}',
    httpMethod: 'put',
    summary: '修改城市',
    description: '修改城市',
    stainlessPath: '(resource) admin.config.cities > (method) update',
    qualified: 'client.admin.config.cities.update',
    params: ['id: number;', 'body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update\n\n`client.admin.config.cities.update(id: number, body: object): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/config/cities/{id}`\n\n修改城市\n\n### Parameters\n\n- `id: number`\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.cities.update(0, { body: { foo: {} } });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/cities/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.cities.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.cities.update(0, { body: { foo: {} } });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/admin/config/cities/{id}',
    httpMethod: 'delete',
    summary: '删除城市',
    description: '删除城市',
    stainlessPath: '(resource) admin.config.cities > (method) delete',
    qualified: 'client.admin.config.cities.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.admin.config.cities.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/admin/config/cities/{id}`\n\n删除城市\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.cities.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/cities/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.cities.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.cities.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/config/cities',
    httpMethod: 'get',
    summary: '获取城市列表',
    description: '分页获取城市列表',
    stainlessPath: '(resource) admin.config.cities > (method) list',
    qualified: 'client.admin.config.cities.list',
    params: ['keyword?: string;', 'page?: number;', 'pageSize?: number;', 'provinceId?: number;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.config.cities.list(keyword?: string, page?: number, pageSize?: number, provinceId?: number): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/config/cities`\n\n分页获取城市列表\n\n### Parameters\n\n- `keyword?: string`\n  搜索关键词\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页条数，默认20\n\n- `provinceId?: number`\n  省份ID\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.config.cities.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/cities \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.cities.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.config.cities.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/admin/config/cities',
    httpMethod: 'post',
    summary: '新增城市',
    description: '新增城市',
    stainlessPath: '(resource) admin.config.cities > (method) create',
    qualified: 'client.admin.config.cities.create',
    params: ['body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## create\n\n`client.admin.config.cities.create(body: object): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/config/cities`\n\n新增城市\n\n### Parameters\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.config.cities.create({ body: { foo: {} } });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/cities \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.cities.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.config.cities.create({ body: { foo: {} } });\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/config/banners',
    httpMethod: 'get',
    summary: '获取Banner列表',
    description: '获取Banner配置列表',
    stainlessPath: '(resource) admin.config.banners > (method) list',
    qualified: 'client.admin.config.banners.list',
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## list\n\n`client.admin.config.banners.list(): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/admin/config/banners`\n\n获取Banner配置列表\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.admin.config.banners.list();\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/banners \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.banners.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.admin.config.banners.list();\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/admin/config/banners',
    httpMethod: 'put',
    summary: '更新Banner配置',
    description: '更新Banner配置',
    stainlessPath: '(resource) admin.config.banners > (method) create',
    qualified: 'client.admin.config.banners.create',
    params: ['banners: object[];'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## create\n\n`client.admin.config.banners.create(banners: object[]): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/config/banners`\n\n更新Banner配置\n\n### Parameters\n\n- `banners: object[]`\n  banner列表\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.banners.create({ banners: [{ foo: {} }] });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/banners \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "banners": [\n            {\n              "foo": {}\n            }\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.banners.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.banners.create({ banners: [{ foo: {} }] });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'upload',
    endpoint: '/api/admin/config/banners/upload',
    httpMethod: 'post',
    summary: '上传Banner图片',
    description: '上传Banner图片',
    stainlessPath: '(resource) admin.config.banners > (method) upload',
    qualified: 'client.admin.config.banners.upload',
    params: ['file: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## upload\n\n`client.admin.config.banners.upload(file: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/config/banners/upload`\n\n上传Banner图片\n\n### Parameters\n\n- `file: string`\n  图片文件\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringString = await client.admin.config.banners.upload({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultMapStringString);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/admin/config/banners/upload \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.admin.config.banners.upload',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringString = await client.admin.config.banners.upload({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultMapStringString.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/config/announcements/{id}',
    httpMethod: 'get',
    summary: '获取公告详情',
    description: '获取指定公告详情',
    stainlessPath: '(resource) admin.config.announcements > (method) retrieve',
    qualified: 'client.admin.config.announcements.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.config.announcements.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/config/announcements/{id}`\n\n获取指定公告详情\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.config.announcements.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/announcements/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.announcements.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.config.announcements.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/admin/config/announcements/{id}',
    httpMethod: 'put',
    summary: '修改公告',
    description: '修改指定公告',
    stainlessPath: '(resource) admin.config.announcements > (method) update',
    qualified: 'client.admin.config.announcements.update',
    params: ['id: number;', 'content: string;', 'title: string;', 'publishAt?: string;', 'status?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update\n\n`client.admin.config.announcements.update(id: number, content: string, title: string, publishAt?: string, status?: string): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/config/announcements/{id}`\n\n修改指定公告\n\n### Parameters\n\n- `id: number`\n\n- `content: string`\n  内容\n\n- `title: string`\n  标题\n\n- `publishAt?: string`\n  发布时间\n\n- `status?: string`\n  状态: draft/published\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.announcements.update(0, { content: 'content', title: 'title' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/announcements/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "content": "content",\n          "title": "title"\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.announcements.update',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.announcements.update(0, {\n  content: 'content',\n  title: 'title',\n});\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/admin/config/announcements/{id}',
    httpMethod: 'delete',
    summary: '删除公告',
    description: '删除指定公告',
    stainlessPath: '(resource) admin.config.announcements > (method) delete',
    qualified: 'client.admin.config.announcements.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.admin.config.announcements.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/admin/config/announcements/{id}`\n\n删除指定公告\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.announcements.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/announcements/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.announcements.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.announcements.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/config/announcements',
    httpMethod: 'get',
    summary: '获取公告列表',
    description: '分页获取公告列表',
    stainlessPath: '(resource) admin.config.announcements > (method) list',
    qualified: 'client.admin.config.announcements.list',
    params: ['page?: number;', 'pageSize?: number;', 'status?: string;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.config.announcements.list(page?: number, pageSize?: number, status?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/config/announcements`\n\n分页获取公告列表\n\n### Parameters\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页条数，默认10\n\n- `status?: string`\n  状态: published/draft\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.config.announcements.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/announcements \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.announcements.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.config.announcements.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/admin/config/announcements',
    httpMethod: 'post',
    summary: '新增公告',
    description: '创建新公告',
    stainlessPath: '(resource) admin.config.announcements > (method) create',
    qualified: 'client.admin.config.announcements.create',
    params: ['content: string;', 'title: string;', 'publishAt?: string;', 'status?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## create\n\n`client.admin.config.announcements.create(content: string, title: string, publishAt?: string, status?: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/config/announcements`\n\n创建新公告\n\n### Parameters\n\n- `content: string`\n  内容\n\n- `title: string`\n  标题\n\n- `publishAt?: string`\n  发布时间\n\n- `status?: string`\n  状态: draft/published\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.config.announcements.create({ content: 'content', title: 'title' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/announcements \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "content": "content",\n          "title": "title"\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.announcements.create',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.config.announcements.create({\n  content: 'content',\n  title: 'title',\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve_banned_words',
    endpoint: '/api/admin/config/banned-words',
    httpMethod: 'get',
    summary: '获取违禁词列表',
    description: '分页获取违禁词列表',
    stainlessPath: '(resource) admin.config.banned_words > (method) retrieve_banned_words',
    qualified: 'client.admin.config.bannedWords.retrieveBannedWords',
    params: ['keyword?: string;', 'page?: number;', 'pageSize?: number;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## retrieve_banned_words\n\n`client.admin.config.bannedWords.retrieveBannedWords(keyword?: string, page?: number, pageSize?: number): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/config/banned-words`\n\n分页获取违禁词列表\n\n### Parameters\n\n- `keyword?: string`\n  搜索关键词\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页条数，默认20\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.config.bannedWords.retrieveBannedWords();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/banned-words \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.bannedWords.retrieveBannedWords',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.config.bannedWords.retrieveBannedWords();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'banned_words',
    endpoint: '/api/admin/config/banned-words',
    httpMethod: 'post',
    summary: '新增违禁词',
    description: '批量添加违禁词',
    stainlessPath: '(resource) admin.config.banned_words > (method) banned_words',
    qualified: 'client.admin.config.bannedWords.bannedWords',
    params: ['words: string[];'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## banned_words\n\n`client.admin.config.bannedWords.bannedWords(words: string[]): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/config/banned-words`\n\n批量添加违禁词\n\n### Parameters\n\n- `words: string[]`\n  违禁词列表\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.config.bannedWords.bannedWords({ words: ['string'] });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/banned-words \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "words": [\n            "string"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.admin.config.bannedWords.bannedWords',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.config.bannedWords.bannedWords({\n  words: ['string'],\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/admin/config/banned-words/{id}',
    httpMethod: 'delete',
    summary: '删除违禁词',
    description: '删除指定违禁词',
    stainlessPath: '(resource) admin.config.banned_words > (method) delete',
    qualified: 'client.admin.config.bannedWords.delete',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## delete\n\n`client.admin.config.bannedWords.delete(id: number): { code?: number; data?: object; message?: string; }`\n\n**delete** `/api/admin/config/banned-words/{id}`\n\n删除指定违禁词\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.config.bannedWords.delete(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/config/banned-words/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.config.bannedWords.delete',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.config.bannedWords.delete(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'update_password',
    endpoint: '/api/admin/auth/password',
    httpMethod: 'put',
    summary: '管理后台修改密码',
    description: '管理后台修改密码',
    stainlessPath: '(resource) admin.auth > (method) update_password',
    qualified: 'client.admin.auth.updatePassword',
    params: ['body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## update_password\n\n`client.admin.auth.updatePassword(body: object): { code?: number; data?: object; message?: string; }`\n\n**put** `/api/admin/auth/password`\n\n管理后台修改密码\n\n### Parameters\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.auth.updatePassword({ body: { foo: {} } });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/auth/password \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.admin.auth.updatePassword',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.auth.updatePassword({ body: { foo: {} } });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'logout',
    endpoint: '/api/admin/auth/logout',
    httpMethod: 'post',
    summary: '管理后台退出',
    description: '管理后台退出',
    stainlessPath: '(resource) admin.auth > (method) logout',
    qualified: 'client.admin.auth.logout',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## logout\n\n`client.admin.auth.logout(): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/auth/logout`\n\n管理后台退出\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.auth.logout();\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/auth/logout \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.auth.logout',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.auth.logout();\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'admin_login',
    endpoint: '/api/admin/auth/login',
    httpMethod: 'post',
    summary: '管理后台登录',
    description: '管理后台登录',
    stainlessPath: '(resource) admin.auth > (method) admin_login',
    qualified: 'client.admin.auth.adminLogin',
    params: ['body: object;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## admin_login\n\n`client.admin.auth.adminLogin(body: object): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/auth/login`\n\n管理后台登录\n\n### Parameters\n\n- `body: object`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.auth.adminLogin({ body: { foo: {} } });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/auth/login \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "foo": {}\n        }\'',
      },
      typescript: {
        method: 'client.admin.auth.adminLogin',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.auth.adminLogin({ body: { foo: {} } });\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve_profile',
    endpoint: '/api/admin/auth/profile',
    httpMethod: 'get',
    summary: '获取当前管理用户信息',
    description: '获取当前管理用户信息',
    stainlessPath: '(resource) admin.auth > (method) retrieve_profile',
    qualified: 'client.admin.auth.retrieveProfile',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve_profile\n\n`client.admin.auth.retrieveProfile(): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/auth/profile`\n\n获取当前管理用户信息\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.auth.retrieveProfile();\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/auth/profile \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.auth.retrieveProfile',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.auth.retrieveProfile();\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'mark_as_read',
    endpoint: '/api/admin/notifications/{id}/read',
    httpMethod: 'post',
    summary: '标记通知已读',
    description: '标记通知已读',
    stainlessPath: '(resource) admin.notifications > (method) mark_as_read',
    qualified: 'client.admin.notifications.markAsRead',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## mark_as_read\n\n`client.admin.notifications.markAsRead(id: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/notifications/{id}/read`\n\n标记通知已读\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.notifications.markAsRead(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/notifications/$ID/read \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.notifications.markAsRead',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.notifications.markAsRead(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'mark_all_as_read',
    endpoint: '/api/admin/notifications/read-all',
    httpMethod: 'post',
    summary: '全部标记已读',
    description: '全部标记已读',
    stainlessPath: '(resource) admin.notifications > (method) mark_all_as_read',
    qualified: 'client.admin.notifications.markAllAsRead',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## mark_all_as_read\n\n`client.admin.notifications.markAllAsRead(): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/notifications/read-all`\n\n全部标记已读\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.notifications.markAllAsRead();\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/notifications/read-all \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.notifications.markAllAsRead',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.notifications.markAllAsRead();\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/notifications',
    httpMethod: 'get',
    summary: '获取通知列表',
    description: '获取通知列表',
    stainlessPath: '(resource) admin.notifications > (method) list',
    qualified: 'client.admin.notifications.list',
    params: ['page?: number;', 'page_size?: number;', 'status?: string;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.notifications.list(page?: number, page_size?: number, status?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/notifications`\n\n获取通知列表\n\n### Parameters\n\n- `page?: number`\n\n- `page_size?: number`\n\n- `status?: string`\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.notifications.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/notifications \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.notifications.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.notifications.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'upload_image',
    endpoint: '/api/admin/files/image',
    httpMethod: 'post',
    summary: '上传图片',
    description: '上传图片文件，支持 JPG、PNG、GIF、WebP',
    stainlessPath: '(resource) admin.files > (method) upload_image',
    qualified: 'client.admin.files.uploadImage',
    params: ['file: string;', 'type?: string;'],
    response:
      '{ code?: number; data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }; message?: string; }',
    markdown:
      "## upload_image\n\n`client.admin.files.uploadImage(file: string, type?: string): { code?: number; data?: upload_response; message?: string; }`\n\n**post** `/api/admin/files/image`\n\n上传图片文件，支持 JPG、PNG、GIF、WebP\n\n### Parameters\n\n- `file: string`\n  图片文件\n\n- `type?: string`\n  类型: avatar/logo/license/screenshot\n\n### Returns\n\n- `{ code?: number; data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultUpload = await client.admin.files.uploadImage({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultUpload);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/admin/files/image \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.admin.files.uploadImage',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultUpload = await client.admin.files.uploadImage({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultUpload.code);",
      },
    },
  },
  {
    name: 'upload_file',
    endpoint: '/api/admin/files/file',
    httpMethod: 'post',
    summary: '上传文件',
    description: '上传普通文件',
    stainlessPath: '(resource) admin.files > (method) upload_file',
    qualified: 'client.admin.files.uploadFile',
    params: ['file: string;'],
    response:
      '{ code?: number; data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }; message?: string; }',
    markdown:
      "## upload_file\n\n`client.admin.files.uploadFile(file: string): { code?: number; data?: upload_response; message?: string; }`\n\n**post** `/api/admin/files/file`\n\n上传普通文件\n\n### Parameters\n\n- `file: string`\n  文件\n\n### Returns\n\n- `{ code?: number; data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { fileKey?: string; filename?: string; mimeType?: string; size?: number; storageProvider?: string; url?: string; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultUpload = await client.admin.files.uploadFile({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultUpload);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/admin/files/file \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.admin.files.uploadFile',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultUpload = await client.admin.files.uploadFile({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultUpload.code);",
      },
    },
  },
  {
    name: 'reply',
    endpoint: '/api/admin/feedbacks/{id}/reply',
    httpMethod: 'post',
    summary: '回复反馈',
    description: '回复用户反馈',
    stainlessPath: '(resource) admin.feedbacks > (method) reply',
    qualified: 'client.admin.feedbacks.reply',
    params: ['id: number;', 'content: string;', 'attachments?: string[];'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## reply\n\n`client.admin.feedbacks.reply(id: number, content: string, attachments?: string[]): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/feedbacks/{id}/reply`\n\n回复用户反馈\n\n### Parameters\n\n- `id: number`\n\n- `content: string`\n  回复内容\n\n- `attachments?: string[]`\n  附件URL列表\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.feedbacks.reply(0, { content: 'content' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/feedbacks/$ID/reply \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "content": "content"\n        }\'',
      },
      typescript: {
        method: 'client.admin.feedbacks.reply',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.feedbacks.reply(0, { content: 'content' });\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'upload_attachment',
    endpoint: '/api/admin/feedbacks/attachments',
    httpMethod: 'post',
    summary: '上传反馈附件',
    description: '上传反馈回复的附件',
    stainlessPath: '(resource) admin.feedbacks > (method) upload_attachment',
    qualified: 'client.admin.feedbacks.uploadAttachment',
    params: ['file: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## upload_attachment\n\n`client.admin.feedbacks.uploadAttachment(file: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/feedbacks/attachments`\n\n上传反馈回复的附件\n\n### Parameters\n\n- `file: string`\n  附件文件\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.feedbacks.uploadAttachment({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          "curl http://localhost:9080/api/admin/feedbacks/attachments \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $ZHIPIN_SERVER_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.admin.feedbacks.uploadAttachment',
        example:
          "import fs from 'fs';\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.feedbacks.uploadAttachment({\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/feedbacks',
    httpMethod: 'get',
    summary: '获取反馈列表',
    description: '分页获取用户反馈列表',
    stainlessPath: '(resource) admin.feedbacks > (method) list',
    qualified: 'client.admin.feedbacks.list',
    params: [
      'dateRange?: string;',
      'keyword?: string;',
      'page?: number;',
      'pageSize?: number;',
      'status?: string;',
      'type?: string;',
    ],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.feedbacks.list(dateRange?: string, keyword?: string, page?: number, pageSize?: number, status?: string, type?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/feedbacks`\n\n分页获取用户反馈列表\n\n### Parameters\n\n- `dateRange?: string`\n  日期范围: week/all\n\n- `keyword?: string`\n  搜索关键词\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页条数，默认10\n\n- `status?: string`\n  处理状态: pending/processing/resolved\n\n- `type?: string`\n  反馈类型: suggestion/complaint/consult/report/bug\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.feedbacks.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/feedbacks \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.feedbacks.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.feedbacks.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/feedbacks/{id}',
    httpMethod: 'get',
    summary: '获取反馈详情',
    description: '获取指定反馈的详细信息',
    stainlessPath: '(resource) admin.feedbacks > (method) retrieve',
    qualified: 'client.admin.feedbacks.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.feedbacks.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/feedbacks/{id}`\n\n获取指定反馈的详细信息\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.feedbacks.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/feedbacks/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.feedbacks.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.feedbacks.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'get_statistics',
    endpoint: '/api/admin/feedbacks/statistics',
    httpMethod: 'get',
    summary: '获取反馈统计',
    description: '获取反馈统计数据',
    stainlessPath: '(resource) admin.feedbacks > (method) get_statistics',
    qualified: 'client.admin.feedbacks.getStatistics',
    params: ['range?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## get_statistics\n\n`client.admin.feedbacks.getStatistics(range?: string): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/feedbacks/statistics`\n\n获取反馈统计数据\n\n### Parameters\n\n- `range?: string`\n  时间范围: week/month/quarter/year\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.feedbacks.getStatistics();\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/feedbacks/statistics \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.feedbacks.getStatistics',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.feedbacks.getStatistics();\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'enable',
    endpoint: '/api/admin/enterprises/{id}/enable',
    httpMethod: 'post',
    summary: '启用企业',
    description: '启用指定企业',
    stainlessPath: '(resource) admin.enterprises > (method) enable',
    qualified: 'client.admin.enterprises.enable',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## enable\n\n`client.admin.enterprises.enable(id: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/enterprises/{id}/enable`\n\n启用指定企业\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.enterprises.enable(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/enterprises/$ID/enable \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.enterprises.enable',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.enterprises.enable(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'disable',
    endpoint: '/api/admin/enterprises/{id}/disable',
    httpMethod: 'post',
    summary: '禁用企业',
    description: '禁用指定企业',
    stainlessPath: '(resource) admin.enterprises > (method) disable',
    qualified: 'client.admin.enterprises.disable',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## disable\n\n`client.admin.enterprises.disable(id: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/enterprises/{id}/disable`\n\n禁用指定企业\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.enterprises.disable(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/enterprises/$ID/disable \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.enterprises.disable',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.enterprises.disable(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/enterprises',
    httpMethod: 'get',
    summary: '获取企业列表',
    description: '分页获取平台所有企业列表',
    stainlessPath: '(resource) admin.enterprises > (method) list',
    qualified: 'client.admin.enterprises.list',
    params: [
      'industry?: string;',
      'keyword?: string;',
      'page?: number;',
      'pageSize?: number;',
      'scale?: string;',
      'status?: string;',
    ],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.enterprises.list(industry?: string, keyword?: string, page?: number, pageSize?: number, scale?: string, status?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/enterprises`\n\n分页获取平台所有企业列表\n\n### Parameters\n\n- `industry?: string`\n  行业筛选\n\n- `keyword?: string`\n  搜索关键词\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页条数，默认10\n\n- `scale?: string`\n  规模筛选\n\n- `status?: string`\n  状态筛选\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.enterprises.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/enterprises \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.enterprises.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.enterprises.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/enterprises/{id}',
    httpMethod: 'get',
    summary: '获取企业详情',
    description: '获取指定企业的详细信息',
    stainlessPath: '(resource) admin.enterprises > (method) retrieve',
    qualified: 'client.admin.enterprises.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.enterprises.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/enterprises/{id}`\n\n获取指定企业的详细信息\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.enterprises.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/enterprises/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.enterprises.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.enterprises.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'reject',
    endpoint: '/api/admin/enterprises/change-requests/{id}/reject',
    httpMethod: 'post',
    summary: '驳回企业变更申请',
    description: '审批驳回企业信息变更申请',
    stainlessPath: '(resource) admin.enterprises.change_requests > (method) reject',
    qualified: 'client.admin.enterprises.changeRequests.reject',
    params: ['id: number;', 'reason: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## reject\n\n`client.admin.enterprises.changeRequests.reject(id: number, reason: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/enterprises/change-requests/{id}/reject`\n\n审批驳回企业信息变更申请\n\n### Parameters\n\n- `id: number`\n\n- `reason: string`\n  驳回原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.enterprises.changeRequests.reject(0, { reason: 'reason' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/enterprises/change-requests/$ID/reject \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "reason": "reason"\n        }\'',
      },
      typescript: {
        method: 'client.admin.enterprises.changeRequests.reject',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.enterprises.changeRequests.reject(0, { reason: 'reason' });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'approve',
    endpoint: '/api/admin/enterprises/change-requests/{id}/approve',
    httpMethod: 'post',
    summary: '通过企业变更申请',
    description: '审批通过后会更新企业信息',
    stainlessPath: '(resource) admin.enterprises.change_requests > (method) approve',
    qualified: 'client.admin.enterprises.changeRequests.approve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## approve\n\n`client.admin.enterprises.changeRequests.approve(id: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/enterprises/change-requests/{id}/approve`\n\n审批通过后会更新企业信息\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.enterprises.changeRequests.approve(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/enterprises/change-requests/$ID/approve \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.enterprises.changeRequests.approve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.enterprises.changeRequests.approve(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/enterprises/change-requests',
    httpMethod: 'get',
    summary: '获取企业变更申请列表',
    description: '分页获取企业信息变更申请',
    stainlessPath: '(resource) admin.enterprises.change_requests > (method) list',
    qualified: 'client.admin.enterprises.changeRequests.list',
    params: ['keyword?: string;', 'page?: number;', 'pageSize?: number;', 'status?: string;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.enterprises.changeRequests.list(keyword?: string, page?: number, pageSize?: number, status?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/enterprises/change-requests`\n\n分页获取企业信息变更申请\n\n### Parameters\n\n- `keyword?: string`\n  关键词: 企业名称\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `status?: string`\n  状态: pending/approved/rejected/all\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.enterprises.changeRequests.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/enterprises/change-requests \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.enterprises.changeRequests.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.enterprises.changeRequests.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/enterprises/change-requests/{id}',
    httpMethod: 'get',
    summary: '获取企业变更申请详情',
    description: '获取指定申请详情',
    stainlessPath: '(resource) admin.enterprises.change_requests > (method) retrieve',
    qualified: 'client.admin.enterprises.changeRequests.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.enterprises.changeRequests.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/enterprises/change-requests/{id}`\n\n获取指定申请详情\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.enterprises.changeRequests.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/enterprises/change-requests/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.enterprises.changeRequests.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.enterprises.changeRequests.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'reject',
    endpoint: '/api/admin/enterprises/admin-transfer-requests/{id}/reject',
    httpMethod: 'post',
    summary: '驳回管理员变更申请',
    description: '审批驳回管理员变更申请',
    stainlessPath: '(resource) admin.enterprises.admin_transfer_requests > (method) reject',
    qualified: 'client.admin.enterprises.adminTransferRequests.reject',
    params: ['id: number;', 'reason: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## reject\n\n`client.admin.enterprises.adminTransferRequests.reject(id: number, reason: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/enterprises/admin-transfer-requests/{id}/reject`\n\n审批驳回管理员变更申请\n\n### Parameters\n\n- `id: number`\n\n- `reason: string`\n  驳回原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.enterprises.adminTransferRequests.reject(0, { reason: 'reason' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/enterprises/admin-transfer-requests/$ID/reject \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "reason": "reason"\n        }\'',
      },
      typescript: {
        method: 'client.admin.enterprises.adminTransferRequests.reject',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.enterprises.adminTransferRequests.reject(0, {\n  reason: 'reason',\n});\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'approve',
    endpoint: '/api/admin/enterprises/admin-transfer-requests/{id}/approve',
    httpMethod: 'post',
    summary: '通过管理员变更申请',
    description: '审批通过后会变更企业管理员',
    stainlessPath: '(resource) admin.enterprises.admin_transfer_requests > (method) approve',
    qualified: 'client.admin.enterprises.adminTransferRequests.approve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## approve\n\n`client.admin.enterprises.adminTransferRequests.approve(id: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/enterprises/admin-transfer-requests/{id}/approve`\n\n审批通过后会变更企业管理员\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.enterprises.adminTransferRequests.approve(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/enterprises/admin-transfer-requests/$ID/approve \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.enterprises.adminTransferRequests.approve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.enterprises.adminTransferRequests.approve(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/enterprises/admin-transfer-requests',
    httpMethod: 'get',
    summary: '获取管理员变更申请列表',
    description: '分页获取管理员变更申请',
    stainlessPath: '(resource) admin.enterprises.admin_transfer_requests > (method) list',
    qualified: 'client.admin.enterprises.adminTransferRequests.list',
    params: ['keyword?: string;', 'page?: number;', 'pageSize?: number;', 'status?: string;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.enterprises.adminTransferRequests.list(keyword?: string, page?: number, pageSize?: number, status?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/enterprises/admin-transfer-requests`\n\n分页获取管理员变更申请\n\n### Parameters\n\n- `keyword?: string`\n  关键词: 企业名称\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `status?: string`\n  状态: pending/approved/rejected/all\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.enterprises.adminTransferRequests.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/enterprises/admin-transfer-requests \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.enterprises.adminTransferRequests.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.enterprises.adminTransferRequests.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/enterprises/admin-transfer-requests/{id}',
    httpMethod: 'get',
    summary: '获取管理员变更申请详情',
    description: '获取指定申请详情',
    stainlessPath: '(resource) admin.enterprises.admin_transfer_requests > (method) retrieve',
    qualified: 'client.admin.enterprises.adminTransferRequests.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.enterprises.adminTransferRequests.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/enterprises/admin-transfer-requests/{id}`\n\n获取指定申请详情\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.enterprises.adminTransferRequests.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/enterprises/admin-transfer-requests/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.enterprises.adminTransferRequests.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.enterprises.adminTransferRequests.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'reject',
    endpoint: '/api/admin/audit/resumes/{id}/reject',
    httpMethod: 'post',
    summary: '审核驳回简历',
    description: '驳回异常简历',
    stainlessPath: '(resource) admin.audit.resumes > (method) reject',
    qualified: 'client.admin.audit.resumes.reject',
    params: ['id: number;', 'reason: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## reject\n\n`client.admin.audit.resumes.reject(id: number, reason: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/audit/resumes/{id}/reject`\n\n驳回异常简历\n\n### Parameters\n\n- `id: number`\n\n- `reason: string`\n  驳回原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.audit.resumes.reject(0, { reason: 'reason' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/resumes/$ID/reject \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "reason": "reason"\n        }\'',
      },
      typescript: {
        method: 'client.admin.audit.resumes.reject',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.audit.resumes.reject(0, { reason: 'reason' });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'approve',
    endpoint: '/api/admin/audit/resumes/{id}/approve',
    httpMethod: 'post',
    summary: '审核通过简历',
    description: '通过异常简历审核',
    stainlessPath: '(resource) admin.audit.resumes > (method) approve',
    qualified: 'client.admin.audit.resumes.approve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## approve\n\n`client.admin.audit.resumes.approve(id: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/audit/resumes/{id}/approve`\n\n通过异常简历审核\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.audit.resumes.approve(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/resumes/$ID/approve \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.audit.resumes.approve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.audit.resumes.approve(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/audit/resumes',
    httpMethod: 'get',
    summary: '获取异常简历列表',
    description: '分页获取异常简历列表',
    stainlessPath: '(resource) admin.audit.resumes > (method) list',
    qualified: 'client.admin.audit.resumes.list',
    params: [
      'anomalyType?: string;',
      'keyword?: string;',
      'page?: number;',
      'pageSize?: number;',
      'status?: string;',
    ],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.audit.resumes.list(anomalyType?: string, keyword?: string, page?: number, pageSize?: number, status?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/audit/resumes`\n\n分页获取异常简历列表\n\n### Parameters\n\n- `anomalyType?: string`\n  异常类型\n\n- `keyword?: string`\n  搜索关键词\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页条数，默认10\n\n- `status?: string`\n  状态: pending/approved/rejected\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.audit.resumes.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/resumes \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.audit.resumes.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.audit.resumes.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/audit/resumes/{id}',
    httpMethod: 'get',
    summary: '获取异常简历详情',
    description: '获取指定异常简历的详情',
    stainlessPath: '(resource) admin.audit.resumes > (method) retrieve',
    qualified: 'client.admin.audit.resumes.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.audit.resumes.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/audit/resumes/{id}`\n\n获取指定异常简历的详情\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.audit.resumes.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/resumes/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.audit.resumes.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.audit.resumes.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'reject',
    endpoint: '/api/admin/audit/jobs/{id}/reject',
    httpMethod: 'post',
    summary: '审核驳回职位',
    description: '驳回指定职位的审核',
    stainlessPath: '(resource) admin.audit.jobs > (method) reject',
    qualified: 'client.admin.audit.jobs.reject',
    params: ['id: number;', 'reason: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## reject\n\n`client.admin.audit.jobs.reject(id: number, reason: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/audit/jobs/{id}/reject`\n\n驳回指定职位的审核\n\n### Parameters\n\n- `id: number`\n\n- `reason: string`\n  驳回原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.audit.jobs.reject(0, { reason: 'reason' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/jobs/$ID/reject \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "reason": "reason"\n        }\'',
      },
      typescript: {
        method: 'client.admin.audit.jobs.reject',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.audit.jobs.reject(0, { reason: 'reason' });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'approve',
    endpoint: '/api/admin/audit/jobs/{id}/approve',
    httpMethod: 'post',
    summary: '审核通过职位',
    description: '通过指定职位的审核',
    stainlessPath: '(resource) admin.audit.jobs > (method) approve',
    qualified: 'client.admin.audit.jobs.approve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## approve\n\n`client.admin.audit.jobs.approve(id: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/audit/jobs/{id}/approve`\n\n通过指定职位的审核\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.audit.jobs.approve(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/jobs/$ID/approve \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.audit.jobs.approve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.audit.jobs.approve(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/audit/jobs',
    httpMethod: 'get',
    summary: '获取职位审核列表',
    description: '分页获取待审核/已审核的职位列表',
    stainlessPath: '(resource) admin.audit.jobs > (method) list',
    qualified: 'client.admin.audit.jobs.list',
    params: ['keyword?: string;', 'page?: number;', 'pageSize?: number;', 'status?: string;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.audit.jobs.list(keyword?: string, page?: number, pageSize?: number, status?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/audit/jobs`\n\n分页获取待审核/已审核的职位列表\n\n### Parameters\n\n- `keyword?: string`\n  搜索关键词\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页条数，默认10\n\n- `status?: string`\n  状态: pending/approved/rejected/all\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.audit.jobs.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/jobs \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.audit.jobs.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.audit.jobs.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/audit/jobs/{id}',
    httpMethod: 'get',
    summary: '获取职位审核详情',
    description: '获取指定职位的审核详情',
    stainlessPath: '(resource) admin.audit.jobs > (method) retrieve',
    qualified: 'client.admin.audit.jobs.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.audit.jobs.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/audit/jobs/{id}`\n\n获取指定职位的审核详情\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.audit.jobs.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/jobs/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.audit.jobs.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.audit.jobs.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'reject',
    endpoint: '/api/admin/audit/jobs/batch/reject',
    httpMethod: 'post',
    summary: '批量审核驳回职位',
    description: '批量驳回职位审核',
    stainlessPath: '(resource) admin.audit.jobs.batch > (method) reject',
    qualified: 'client.admin.audit.jobs.batch.reject',
    params: ['ids: number[];', 'reason: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## reject\n\n`client.admin.audit.jobs.batch.reject(ids: number[], reason: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/audit/jobs/batch/reject`\n\n批量驳回职位审核\n\n### Parameters\n\n- `ids: number[]`\n  ID列表\n\n- `reason: string`\n  驳回原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.audit.jobs.batch.reject({ ids: [0], reason: 'reason' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/jobs/batch/reject \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "ids": [\n            0\n          ],\n          "reason": "reason"\n        }\'',
      },
      typescript: {
        method: 'client.admin.audit.jobs.batch.reject',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.audit.jobs.batch.reject({\n  ids: [0],\n  reason: 'reason',\n});\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'approve',
    endpoint: '/api/admin/audit/jobs/batch/approve',
    httpMethod: 'post',
    summary: '批量审核通过职位',
    description: '批量通过职位审核',
    stainlessPath: '(resource) admin.audit.jobs.batch > (method) approve',
    qualified: 'client.admin.audit.jobs.batch.approve',
    params: ['ids: number[];'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## approve\n\n`client.admin.audit.jobs.batch.approve(ids: number[]): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/audit/jobs/batch/approve`\n\n批量通过职位审核\n\n### Parameters\n\n- `ids: number[]`\n  ID列表\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.audit.jobs.batch.approve({ ids: [0] });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/jobs/batch/approve \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "ids": [\n            0\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.admin.audit.jobs.batch.approve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.audit.jobs.batch.approve({ ids: [0] });\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'reject',
    endpoint: '/api/admin/audit/enterprises/{id}/reject',
    httpMethod: 'post',
    summary: '审核驳回企业',
    description: '驳回指定企业的资质审核',
    stainlessPath: '(resource) admin.audit.enterprises > (method) reject',
    qualified: 'client.admin.audit.enterprises.reject',
    params: ['id: number;', 'reason: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## reject\n\n`client.admin.audit.enterprises.reject(id: number, reason: string): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/audit/enterprises/{id}/reject`\n\n驳回指定企业的资质审核\n\n### Parameters\n\n- `id: number`\n\n- `reason: string`\n  驳回原因\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.audit.enterprises.reject(0, { reason: 'reason' });\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/enterprises/$ID/reject \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "reason": "reason"\n        }\'',
      },
      typescript: {
        method: 'client.admin.audit.enterprises.reject',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.audit.enterprises.reject(0, { reason: 'reason' });\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'approve',
    endpoint: '/api/admin/audit/enterprises/{id}/approve',
    httpMethod: 'post',
    summary: '审核通过企业',
    description: '通过指定企业的资质审核',
    stainlessPath: '(resource) admin.audit.enterprises > (method) approve',
    qualified: 'client.admin.audit.enterprises.approve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## approve\n\n`client.admin.audit.enterprises.approve(id: number): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/audit/enterprises/{id}/approve`\n\n通过指定企业的资质审核\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultVoid = await client.admin.audit.enterprises.approve(0);\n\nconsole.log(resultVoid);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/enterprises/$ID/approve \\\n    -X POST \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.audit.enterprises.approve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultVoid = await client.admin.audit.enterprises.approve(0);\n\nconsole.log(resultVoid.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/audit/enterprises',
    httpMethod: 'get',
    summary: '获取企业审核列表',
    description: '分页获取待审核/已审核的企业列表',
    stainlessPath: '(resource) admin.audit.enterprises > (method) list',
    qualified: 'client.admin.audit.enterprises.list',
    params: ['keyword?: string;', 'page?: number;', 'pageSize?: number;', 'status?: string;'],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.audit.enterprises.list(keyword?: string, page?: number, pageSize?: number, status?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/audit/enterprises`\n\n分页获取待审核/已审核的企业列表\n\n### Parameters\n\n- `keyword?: string`\n  搜索关键词\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页条数，默认10\n\n- `status?: string`\n  状态: pending/approved/rejected/all\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.audit.enterprises.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/enterprises \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.audit.enterprises.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.audit.enterprises.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/audit/enterprises/{id}',
    httpMethod: 'get',
    summary: '获取企业审核详情',
    description: '获取指定企业的审核详情',
    stainlessPath: '(resource) admin.audit.enterprises > (method) retrieve',
    qualified: 'client.admin.audit.enterprises.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.audit.enterprises.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/audit/enterprises/{id}`\n\n获取指定企业的审核详情\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.audit.enterprises.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/enterprises/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.audit.enterprises.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.audit.enterprises.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'approve',
    endpoint: '/api/admin/audit/enterprises/batch/approve',
    httpMethod: 'post',
    summary: '批量审核通过企业',
    description: '批量通过企业资质审核',
    stainlessPath: '(resource) admin.audit.enterprises.batch > (method) approve',
    qualified: 'client.admin.audit.enterprises.batch.approve',
    params: ['ids: number[];'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## approve\n\n`client.admin.audit.enterprises.batch.approve(ids: number[]): { code?: number; data?: object; message?: string; }`\n\n**post** `/api/admin/audit/enterprises/batch/approve`\n\n批量通过企业资质审核\n\n### Parameters\n\n- `ids: number[]`\n  ID列表\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.audit.enterprises.batch.approve({ ids: [0] });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/audit/enterprises/batch/approve \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY" \\\n    -d \'{\n          "ids": [\n            0\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.admin.audit.enterprises.batch.approve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.audit.enterprises.batch.approve({ ids: [0] });\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/system/notice/{noticeId}',
    httpMethod: 'get',
    summary: '获取公告详情',
    description: '根据公告ID获取详情，同时增加浏览次数',
    stainlessPath: '(resource) admin.system.notice > (method) retrieve',
    qualified: 'client.admin.system.notice.retrieve',
    params: ['noticeId: number;'],
    response:
      '{ code?: number; data?: { id?: number; content?: string; createTime?: string; isTop?: number; noticeType?: number; noticeTypeName?: string; publishTime?: string; title?: string; viewCount?: number; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.system.notice.retrieve(noticeId: number): { code?: number; data?: system_notice; message?: string; }`\n\n**get** `/api/admin/system/notice/{noticeId}`\n\n根据公告ID获取详情，同时增加浏览次数\n\n### Parameters\n\n- `noticeId: number`\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; content?: string; createTime?: string; isTop?: number; noticeType?: number; noticeTypeName?: string; publishTime?: string; title?: string; viewCount?: number; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; content?: string; createTime?: string; isTop?: number; noticeType?: number; noticeTypeName?: string; publishTime?: string; title?: string; viewCount?: number; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst notice = await client.admin.system.notice.retrieve(0);\n\nconsole.log(notice);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/system/notice/$NOTICE_ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.system.notice.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst notice = await client.admin.system.notice.retrieve(0);\n\nconsole.log(notice.code);",
      },
    },
  },
  {
    name: 'list_top',
    endpoint: '/api/admin/system/notice/top',
    httpMethod: 'get',
    summary: '获取置顶公告',
    description: '获取置顶的公告列表，最多5条',
    stainlessPath: '(resource) admin.system.notice > (method) list_top',
    qualified: 'client.admin.system.notice.listTop',
    response:
      '{ code?: number; data?: { id?: number; content?: string; createTime?: string; isTop?: number; noticeType?: number; noticeTypeName?: string; publishTime?: string; title?: string; viewCount?: number; }[]; message?: string; }',
    markdown:
      "## list_top\n\n`client.admin.system.notice.listTop(): { code?: number; data?: system_notice[]; message?: string; }`\n\n**get** `/api/admin/system/notice/top`\n\n获取置顶的公告列表，最多5条\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; content?: string; createTime?: string; isTop?: number; noticeType?: number; noticeTypeName?: string; publishTime?: string; title?: string; viewCount?: number; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; content?: string; createTime?: string; isTop?: number; noticeType?: number; noticeTypeName?: string; publishTime?: string; title?: string; viewCount?: number; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListSystemNotices = await client.admin.system.notice.listTop();\n\nconsole.log(resultListSystemNotices);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/system/notice/top \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.system.notice.listTop',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListSystemNotices = await client.admin.system.notice.listTop();\n\nconsole.log(resultListSystemNotices.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/system/notice/list',
    httpMethod: 'get',
    summary: '获取公告列表',
    description: '获取已发布的公告列表，支持按类型筛选',
    stainlessPath: '(resource) admin.system.notice > (method) list',
    qualified: 'client.admin.system.notice.list',
    params: ['limit?: number;', 'type?: number;'],
    response:
      '{ code?: number; data?: { id?: number; content?: string; createTime?: string; isTop?: number; noticeType?: number; noticeTypeName?: string; publishTime?: string; title?: string; viewCount?: number; }[]; message?: string; }',
    markdown:
      "## list\n\n`client.admin.system.notice.list(limit?: number, type?: number): { code?: number; data?: system_notice[]; message?: string; }`\n\n**get** `/api/admin/system/notice/list`\n\n获取已发布的公告列表，支持按类型筛选\n\n### Parameters\n\n- `limit?: number`\n  数量限制\n\n- `type?: number`\n  公告类型:1系统公告2活动公告3更新公告\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; content?: string; createTime?: string; isTop?: number; noticeType?: number; noticeTypeName?: string; publishTime?: string; title?: string; viewCount?: number; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; content?: string; createTime?: string; isTop?: number; noticeType?: number; noticeTypeName?: string; publishTime?: string; title?: string; viewCount?: number; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListSystemNotices = await client.admin.system.notice.list();\n\nconsole.log(resultListSystemNotices);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/system/notice/list \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.system.notice.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListSystemNotices = await client.admin.system.notice.list();\n\nconsole.log(resultListSystemNotices.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/system/dictionary/{dictType}',
    httpMethod: 'get',
    summary: '获取字典数据',
    description: '根据字典类型获取字典项列表',
    stainlessPath: '(resource) admin.system.dictionary > (method) retrieve',
    qualified: 'client.admin.system.dictionary.retrieve',
    params: ['dictType: string;'],
    response:
      '{ code?: number; data?: { dictType?: string; items?: { dictCode?: string; dictName?: string; dictValue?: string; sortOrder?: number; }[]; }; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.system.dictionary.retrieve(dictType: string): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/system/dictionary/{dictType}`\n\n根据字典类型获取字典项列表\n\n### Parameters\n\n- `dictType: string`\n\n### Returns\n\n- `{ code?: number; data?: { dictType?: string; items?: { dictCode?: string; dictName?: string; dictValue?: string; sortOrder?: number; }[]; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { dictType?: string; items?: { dictCode?: string; dictName?: string; dictValue?: string; sortOrder?: number; }[]; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst dictionary = await client.admin.system.dictionary.retrieve('dictType');\n\nconsole.log(dictionary);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/system/dictionary/$DICT_TYPE \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.system.dictionary.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst dictionary = await client.admin.system.dictionary.retrieve('dictType');\n\nconsole.log(dictionary.code);",
      },
    },
  },
  {
    name: 'list_types',
    endpoint: '/api/admin/system/dictionary/types',
    httpMethod: 'get',
    summary: '获取字典类型列表',
    description: '获取所有可用的字典类型',
    stainlessPath: '(resource) admin.system.dictionary > (method) list_types',
    qualified: 'client.admin.system.dictionary.listTypes',
    response: '{ code?: number; data?: string[]; message?: string; }',
    markdown:
      "## list_types\n\n`client.admin.system.dictionary.listTypes(): { code?: number; data?: string[]; message?: string; }`\n\n**get** `/api/admin/system/dictionary/types`\n\n获取所有可用的字典类型\n\n### Returns\n\n- `{ code?: number; data?: string[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: string[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListString = await client.admin.system.dictionary.listTypes();\n\nconsole.log(resultListString);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/system/dictionary/types \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.system.dictionary.listTypes',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListString = await client.admin.system.dictionary.listTypes();\n\nconsole.log(resultListString.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/system/config/{key}',
    httpMethod: 'get',
    summary: '获取配置值',
    description: '根据配置键获取系统配置值',
    stainlessPath: '(resource) admin.system.config > (method) retrieve',
    qualified: 'client.admin.system.config.retrieve',
    params: ['key: string;'],
    response: '{ code?: number; data?: string; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.system.config.retrieve(key: string): { code?: number; data?: string; message?: string; }`\n\n**get** `/api/admin/system/config/{key}`\n\n根据配置键获取系统配置值\n\n### Parameters\n\n- `key: string`\n\n### Returns\n\n- `{ code?: number; data?: string; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: string`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultString = await client.admin.system.config.retrieve('key');\n\nconsole.log(resultString);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/system/config/$KEY \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.system.config.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultString = await client.admin.system.config.retrieve('key');\n\nconsole.log(resultString.code);",
      },
    },
  },
  {
    name: 'list_by_group',
    endpoint: '/api/admin/system/config/group/{groupName}',
    httpMethod: 'get',
    summary: '获取分组配置',
    description: '根据分组名称获取配置列表',
    stainlessPath: '(resource) admin.system.config > (method) list_by_group',
    qualified: 'client.admin.system.config.listByGroup',
    params: ['groupName: string;'],
    response:
      '{ code?: number; data?: { id?: number; configKey?: string; configValue?: string; createTime?: string; description?: string; editable?: number; groupName?: string; sortOrder?: number; }[]; message?: string; }',
    markdown:
      "## list_by_group\n\n`client.admin.system.config.listByGroup(groupName: string): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/admin/system/config/group/{groupName}`\n\n根据分组名称获取配置列表\n\n### Parameters\n\n- `groupName: string`\n\n### Returns\n\n- `{ code?: number; data?: { id?: number; configKey?: string; configValue?: string; createTime?: string; description?: string; editable?: number; groupName?: string; sortOrder?: number; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: number; configKey?: string; configValue?: string; createTime?: string; description?: string; editable?: number; groupName?: string; sortOrder?: number; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst response = await client.admin.system.config.listByGroup('groupName');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/system/config/group/$GROUP_NAME \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.system.config.listByGroup',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.admin.system.config.listByGroup('groupName');\n\nconsole.log(response.code);",
      },
    },
  },
  {
    name: 'list_all',
    endpoint: '/api/admin/system/config/all',
    httpMethod: 'get',
    summary: '获取所有配置',
    description: '获取所有系统配置项',
    stainlessPath: '(resource) admin.system.config > (method) list_all',
    qualified: 'client.admin.system.config.listAll',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## list_all\n\n`client.admin.system.config.listAll(): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/system/config/all`\n\n获取所有系统配置项\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringString = await client.admin.system.config.listAll();\n\nconsole.log(resultMapStringString);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/system/config/all \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.system.config.listAll',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringString = await client.admin.system.config.listAll();\n\nconsole.log(resultMapStringString.code);",
      },
    },
  },
  {
    name: 'list_trends',
    endpoint: '/api/admin/statistics/trends',
    httpMethod: 'get',
    summary: '获取趋势图表数据',
    description: '获取用户/企业/职位/简历等趋势数据，用于图表展示',
    stainlessPath: '(resource) admin.statistics > (method) list_trends',
    qualified: 'client.admin.statistics.listTrends',
    params: ['type: string;', 'endDate?: string;', 'range?: string;', 'startDate?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## list_trends\n\n`client.admin.statistics.listTrends(type: string, endDate?: string, range?: string, startDate?: string): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/statistics/trends`\n\n获取用户/企业/职位/简历等趋势数据，用于图表展示\n\n### Parameters\n\n- `type: string`\n  数据类型: user/enterprise/job/resume\n\n- `endDate?: string`\n  结束日期\n\n- `range?: string`\n  时间范围: week/month/quarter/year\n\n- `startDate?: string`\n  开始日期\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.statistics.listTrends({ type: 'type' });\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/statistics/trends \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.statistics.listTrends',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.statistics.listTrends({ type: 'type' });\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve_realtime',
    endpoint: '/api/admin/statistics/realtime',
    httpMethod: 'get',
    summary: '获取实时数据',
    description: '获取平台实时数据：在线用户数、当前活跃等',
    stainlessPath: '(resource) admin.statistics > (method) retrieve_realtime',
    qualified: 'client.admin.statistics.retrieveRealtime',
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve_realtime\n\n`client.admin.statistics.retrieveRealtime(): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/statistics/realtime`\n\n获取平台实时数据：在线用户数、当前活跃等\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.statistics.retrieveRealtime();\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/statistics/realtime \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.statistics.retrieveRealtime',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.statistics.retrieveRealtime();\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve_overview',
    endpoint: '/api/admin/statistics/overview',
    httpMethod: 'get',
    summary: '获取核心数据概览',
    description: '获取平台核心数据统计：用户、企业、职位、简历等',
    stainlessPath: '(resource) admin.statistics > (method) retrieve_overview',
    qualified: 'client.admin.statistics.retrieveOverview',
    params: ['endDate?: string;', 'range?: string;', 'startDate?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve_overview\n\n`client.admin.statistics.retrieveOverview(endDate?: string, range?: string, startDate?: string): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/statistics/overview`\n\n获取平台核心数据统计：用户、企业、职位、简历等\n\n### Parameters\n\n- `endDate?: string`\n  结束日期(YYYY-MM-DD)，range=custom时必填\n\n- `range?: string`\n  时间范围: today/yesterday/week/month/custom\n\n- `startDate?: string`\n  开始日期(YYYY-MM-DD)，range=custom时必填\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.statistics.retrieveOverview();\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/statistics/overview \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.statistics.retrieveOverview',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.statistics.retrieveOverview();\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve_funnel',
    endpoint: '/api/admin/statistics/funnel',
    httpMethod: 'get',
    summary: '获取招聘漏斗数据',
    description: '获取平台整体招聘漏斗数据',
    stainlessPath: '(resource) admin.statistics > (method) retrieve_funnel',
    qualified: 'client.admin.statistics.retrieveFunnel',
    params: ['range?: string;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve_funnel\n\n`client.admin.statistics.retrieveFunnel(range?: string): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/statistics/funnel`\n\n获取平台整体招聘漏斗数据\n\n### Parameters\n\n- `range?: string`\n  时间范围: week/month/quarter\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.statistics.retrieveFunnel();\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/statistics/funnel \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.statistics.retrieveFunnel',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.statistics.retrieveFunnel();\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve_distribution',
    endpoint: '/api/admin/statistics/distribution',
    httpMethod: 'get',
    summary: '获取分布统计数据',
    description: '获取行业/城市/学历/薪资等分布统计',
    stainlessPath: '(resource) admin.statistics > (method) retrieve_distribution',
    qualified: 'client.admin.statistics.retrieveDistribution',
    params: ['type: string;'],
    response: '{ code?: number; data?: object[]; message?: string; }',
    markdown:
      "## retrieve_distribution\n\n`client.admin.statistics.retrieveDistribution(type: string): { code?: number; data?: object[]; message?: string; }`\n\n**get** `/api/admin/statistics/distribution`\n\n获取行业/城市/学历/薪资等分布统计\n\n### Parameters\n\n- `type: string`\n  分布类型: industry/city/education/salary\n\n### Returns\n\n- `{ code?: number; data?: object[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListBanners = await client.admin.statistics.retrieveDistribution({ type: 'type' });\n\nconsole.log(resultListBanners);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/statistics/distribution \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.statistics.retrieveDistribution',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListBanners = await client.admin.statistics.retrieveDistribution({ type: 'type' });\n\nconsole.log(resultListBanners.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/logs',
    httpMethod: 'get',
    summary: '获取日志列表',
    description: '分页获取系统操作日志',
    stainlessPath: '(resource) admin.logs > (method) list',
    qualified: 'client.admin.logs.list',
    params: [
      'date?: string;',
      'keyword?: string;',
      'page?: number;',
      'pageSize?: number;',
      'source?: string;',
      'type?: string;',
    ],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.logs.list(date?: string, keyword?: string, page?: number, pageSize?: number, source?: string, type?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/logs`\n\n分页获取系统操作日志\n\n### Parameters\n\n- `date?: string`\n  日期(YYYY-MM-DD)\n\n- `keyword?: string`\n  搜索关键词(用户名/手机号/IP)\n\n- `page?: number`\n  页码，默认1\n\n- `pageSize?: number`\n  每页条数，默认20\n\n- `source?: string`\n  来源: admin/user/system\n\n- `type?: string`\n  日志类型: operation/error/system\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.logs.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/logs \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.logs.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.logs.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/logs/{id}',
    httpMethod: 'get',
    summary: '获取日志详情',
    description: '获取指定日志的详细信息',
    stainlessPath: '(resource) admin.logs > (method) retrieve',
    qualified: 'client.admin.logs.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.logs.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/logs/{id}`\n\n获取指定日志的详细信息\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.logs.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/logs/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.logs.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.logs.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
  {
    name: 'export',
    endpoint: '/api/admin/logs/export',
    httpMethod: 'get',
    summary: '导出日志',
    description: '导出日志数据为CSV或Excel',
    stainlessPath: '(resource) admin.logs > (method) export',
    qualified: 'client.admin.logs.export',
    params: [
      'endDate?: string;',
      'format?: string;',
      'source?: string;',
      'startDate?: string;',
      'type?: string;',
    ],
    markdown:
      "## export\n\n`client.admin.logs.export(endDate?: string, format?: string, source?: string, startDate?: string, type?: string): void`\n\n**get** `/api/admin/logs/export`\n\n导出日志数据为CSV或Excel\n\n### Parameters\n\n- `endDate?: string`\n  结束日期\n\n- `format?: string`\n  导出格式: csv/xlsx\n\n- `source?: string`\n  来源\n\n- `startDate?: string`\n  开始日期\n\n- `type?: string`\n  日志类型\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nawait client.admin.logs.export()\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/logs/export \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.logs.export',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.admin.logs.export();",
      },
    },
  },
  {
    name: 'search',
    endpoint: '/api/admin/locations/search',
    httpMethod: 'get',
    summary: '地址搜索',
    description: '根据关键词搜索地址',
    stainlessPath: '(resource) admin.locations > (method) search',
    qualified: 'client.admin.locations.search',
    params: ['keyword: string;', 'city?: string;'],
    response:
      '{ code?: number; data?: { id?: string; address?: string; city?: string; distance?: number; district?: string; latitude?: number; longitude?: number; name?: string; }[]; message?: string; }',
    markdown:
      "## search\n\n`client.admin.locations.search(keyword: string, city?: string): { code?: number; data?: location_response[]; message?: string; }`\n\n**get** `/api/admin/locations/search`\n\n根据关键词搜索地址\n\n### Parameters\n\n- `keyword: string`\n  搜索关键词\n\n- `city?: string`\n  限定城市\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; address?: string; city?: string; distance?: number; district?: string; latitude?: number; longitude?: number; name?: string; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; address?: string; city?: string; distance?: number; district?: string; latitude?: number; longitude?: number; name?: string; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListLocations = await client.admin.locations.search({ keyword: 'keyword' });\n\nconsole.log(resultListLocations);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/locations/search \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.locations.search',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListLocations = await client.admin.locations.search({ keyword: 'keyword' });\n\nconsole.log(resultListLocations.code);",
      },
    },
  },
  {
    name: 'list_nearby',
    endpoint: '/api/admin/locations/nearby',
    httpMethod: 'get',
    summary: '获取附近地点',
    description: '根据经纬度获取附近地点',
    stainlessPath: '(resource) admin.locations > (method) list_nearby',
    qualified: 'client.admin.locations.listNearby',
    params: ['latitude: number;', 'longitude: number;', 'radius?: number;'],
    response:
      '{ code?: number; data?: { id?: string; address?: string; city?: string; distance?: number; district?: string; latitude?: number; longitude?: number; name?: string; }[]; message?: string; }',
    markdown:
      "## list_nearby\n\n`client.admin.locations.listNearby(latitude: number, longitude: number, radius?: number): { code?: number; data?: location_response[]; message?: string; }`\n\n**get** `/api/admin/locations/nearby`\n\n根据经纬度获取附近地点\n\n### Parameters\n\n- `latitude: number`\n  纬度\n\n- `longitude: number`\n  经度\n\n- `radius?: number`\n  半径(米)\n\n### Returns\n\n- `{ code?: number; data?: { id?: string; address?: string; city?: string; distance?: number; district?: string; latitude?: number; longitude?: number; name?: string; }[]; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { id?: string; address?: string; city?: string; distance?: number; district?: string; latitude?: number; longitude?: number; name?: string; }[]`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultListLocations = await client.admin.locations.listNearby({ latitude: 0, longitude: 0 });\n\nconsole.log(resultListLocations);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/locations/nearby \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.locations.listNearby',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultListLocations = await client.admin.locations.listNearby({ latitude: 0, longitude: 0 });\n\nconsole.log(resultListLocations.code);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/admin/jobseekers',
    httpMethod: 'get',
    summary: '获取求职者列表',
    description: '获取求职者列表',
    stainlessPath: '(resource) admin.jobseekers > (method) list',
    qualified: 'client.admin.jobseekers.list',
    params: [
      'education?: string;',
      'job_status?: string;',
      'keyword?: string;',
      'page?: number;',
      'page_size?: number;',
      'work_status?: string;',
    ],
    response: '{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }',
    markdown:
      "## list\n\n`client.admin.jobseekers.list(education?: string, job_status?: string, keyword?: string, page?: number, page_size?: number, work_status?: string): { code?: number; data?: page_result_map_string_object; message?: string; }`\n\n**get** `/api/admin/jobseekers`\n\n获取求职者列表\n\n### Parameters\n\n- `education?: string`\n\n- `job_status?: string`\n\n- `keyword?: string`\n\n- `page?: number`\n\n- `page_size?: number`\n\n- `work_status?: string`\n\n### Returns\n\n- `{ code?: number; data?: { list?: object[]; pagination?: pagination; }; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: { list?: object[]; pagination?: { page?: number; pageSize?: number; total?: number; totalPages?: number; }; }`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultPageResultMapStringObject = await client.admin.jobseekers.list();\n\nconsole.log(resultPageResultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/jobseekers \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.jobseekers.list',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultPageResultMapStringObject = await client.admin.jobseekers.list();\n\nconsole.log(resultPageResultMapStringObject.code);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/admin/jobseekers/{id}',
    httpMethod: 'get',
    summary: '获取求职者详情',
    description: '获取求职者详情',
    stainlessPath: '(resource) admin.jobseekers > (method) retrieve',
    qualified: 'client.admin.jobseekers.retrieve',
    params: ['id: number;'],
    response: '{ code?: number; data?: object; message?: string; }',
    markdown:
      "## retrieve\n\n`client.admin.jobseekers.retrieve(id: number): { code?: number; data?: object; message?: string; }`\n\n**get** `/api/admin/jobseekers/{id}`\n\n获取求职者详情\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ code?: number; data?: object; message?: string; }`\n  统一响应包装类\n\n  - `code?: number`\n  - `data?: object`\n  - `message?: string`\n\n### Example\n\n```typescript\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\nconst resultMapStringObject = await client.admin.jobseekers.retrieve(0);\n\nconsole.log(resultMapStringObject);\n```",
    perLanguage: {
      http: {
        example:
          'curl http://localhost:9080/api/admin/jobseekers/$ID \\\n    -H "Authorization: Bearer $ZHIPIN_SERVER_API_KEY"',
      },
      typescript: {
        method: 'client.admin.jobseekers.retrieve',
        example:
          "import ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n});\n\nconst resultMapStringObject = await client.admin.jobseekers.retrieve(0);\n\nconsole.log(resultMapStringObject.code);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'typescript',
    content:
      "# Zhipin Server TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/zhipin-server.svg?label=npm%20(stable))](https://npmjs.org/package/zhipin-server) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/zhipin-server)\n\nThis library provides convenient access to the Zhipin Server REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Zhipin Server MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=zhipin-server-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInpoaXBpbi1zZXJ2ZXItbWNwIl0sImVudiI6eyJaSElQSU5fU0VSVkVSX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22zhipin-server-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22zhipin-server-mcp%22%5D%2C%22env%22%3A%7B%22ZHIPIN_SERVER_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install git+ssh://git@github.com:xiejie2438/zhipin-server-typescript.git\n```\n> [!NOTE]\n> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npm install zhipin-server`\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n  environment: 'environment_1', // or 'production' | 'environment_2'; defaults to 'production'\n});\n\nconst resultWorkExperience = await client.v1.seeker.profile.workExperience.update(0, {\n  company: 'company',\n  position: 'position',\n  startDate: '7321-69',\n});\n\nconsole.log(resultWorkExperience.code);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  apiKey: process.env['ZHIPIN_SERVER_API_KEY'], // This is the default and can be omitted\n  environment: 'environment_1', // or 'production' | 'environment_2'; defaults to 'production'\n});\n\nconst params: ZhipinServer.V1.Seeker.Profile.WorkExperienceUpdateParams = {\n  company: 'company',\n  position: 'position',\n  startDate: '7321-69',\n};\nconst resultWorkExperience: ZhipinServer.V1.Seeker.Profile.ResultWorkExperience =\n  await client.v1.seeker.profile.workExperience.update(0, params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed in many different forms:\n- `File` (or an object with the same structure)\n- a `fetch` `Response` (or an object with the same structure)\n- an `fs.ReadStream`\n- the return value of our `toFile` helper\n\n```ts\nimport fs from 'fs';\nimport ZhipinServer, { toFile } from 'zhipin-server';\n\nconst client = new ZhipinServer();\n\n// If you have access to Node `fs` we recommend using `fs.createReadStream()`:\nawait client.v1.seeker.account.me.avatar({ file: fs.createReadStream('/path/to/file') });\n\n// Or if you have the web `File` API you can pass a `File` instance:\nawait client.v1.seeker.account.me.avatar({ file: new File(['my bytes'], 'file') });\n\n// You can also pass a `fetch` `Response`:\nawait client.v1.seeker.account.me.avatar({ file: await fetch('https://somesite/file') });\n\n// Finally, if none of the above are convenient, you can use our `toFile` helper:\nawait client.v1.seeker.account.me.avatar({ file: await toFile(Buffer.from('my bytes'), 'file') });\nawait client.v1.seeker.account.me.avatar({ file: await toFile(new Uint8Array([0, 1, 2]), 'file') });\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst resultWorkExperience = await client.v1.seeker.profile.workExperience\n  .update(0, {\n    company: 'company',\n    position: 'position',\n    startDate: '7321-69',\n  })\n  .catch(async (err) => {\n    if (err instanceof ZhipinServer.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new ZhipinServer({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.v1.seeker.profile.workExperience.update(0, {\n  company: 'company',\n  position: 'position',\n  startDate: '7321-69',\n}, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new ZhipinServer({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.v1.seeker.profile.workExperience.update(0, {\n  company: 'company',\n  position: 'position',\n  startDate: '7321-69',\n}, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new ZhipinServer();\n\nconst response = await client.v1.seeker.profile.workExperience\n  .update(0, {\n    company: 'company',\n    position: 'position',\n    startDate: '7321-69',\n  })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: resultWorkExperience, response: raw } = await client.v1.seeker.profile.workExperience\n  .update(0, {\n    company: 'company',\n    position: 'position',\n    startDate: '7321-69',\n  })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(resultWorkExperience.code);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `ZHIPIN_SERVER_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport ZhipinServer from 'zhipin-server';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new ZhipinServer({\n  logger: logger.child({ name: 'ZhipinServer' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.v1.seeker.profile.workExperience.update({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport ZhipinServer from 'zhipin-server';\nimport fetch from 'my-fetch';\n\nconst client = new ZhipinServer({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport ZhipinServer from 'zhipin-server';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new ZhipinServer({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport ZhipinServer from 'zhipin-server';\n\nconst client = new ZhipinServer({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport ZhipinServer from 'npm:zhipin-server';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new ZhipinServer({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/xiejie2438/zhipin-server-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
