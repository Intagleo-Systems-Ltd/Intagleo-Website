"use client";
import { useState } from "react";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const serviceContactTypes: Record<string, string> = {
  "Custom Software Development": "custom-software",
  "Legacy Modernization":        "legacy-modernization",
  "Mobile Development":          "mobile-dev",
  "Cloud & DevOps":              "cloud-devops",
  "AI & Machine Learning":       "ai-ml",
  "Staff Augmentation":          "staff-augmentation",
  "Data & Analytics":            "data-analytics",
  "QA & Testing":                "qa-testing",
  "Embedded & IoT":              "embedded-iot",
};

const servicePageUrls: Record<string, string> = {
  "Custom Software Development": "/custom-software",
  "Legacy Modernization":        "/legacy-modernization",
  "Mobile Development":          "/mobile-dev",
  "Cloud & DevOps":              "/cloud-devops",
  "AI & Machine Learning":       "/ai-transformation",
  "Staff Augmentation":          "/staff-augmentation",
  "Data & Analytics":            "/data-analytics",
  "QA & Testing":                "/qa-services",
  "Embedded & IoT":              "/embedded-iot",
};

const services = [
  {
    name: "Custom Software Development",
    description:
      "Purpose-built software designed around your goals, your users, and your business, from architecture to production.",
    tech: [
      { name: "React",       logo: `${CDN}/react/react-original.svg`                },
      { name: "Next.js",     logo: `${CDN}/nextjs/nextjs-original.svg`              },
      { name: "TypeScript",  logo: `${CDN}/typescript/typescript-original.svg`      },
      { name: "Node.js",     logo: `${CDN}/nodejs/nodejs-original.svg`              },
      { name: "Vue.js",      logo: `${CDN}/vuejs/vuejs-original.svg`                },
      { name: "Angular",     logo: `${CDN}/angularjs/angularjs-original.svg`        },
      { name: ".NET Core",   logo: `${CDN}/dotnetcore/dotnetcore-original.svg`      },
      { name: "Java",        logo: `${CDN}/java/java-original.svg`                  },
      { name: "Go",          logo: `${CDN}/go/go-original.svg`                      },
      { name: "Python",      logo: `${CDN}/python/python-original.svg`              },
      { name: "GraphQL",     logo: `${CDN}/graphql/graphql-plain.svg`               },
      { name: "PostgreSQL",  logo: `${CDN}/postgresql/postgresql-original.svg`      },
      { name: "MongoDB",     logo: `${CDN}/mongodb/mongodb-original.svg`            },
      { name: "Redis",       logo: `${CDN}/redis/redis-original.svg`                },
      { name: "Docker",      logo: `${CDN}/docker/docker-original.svg`              },
      { name: "HTML5",       logo: `${CDN}/html5/html5-original.svg`                },
    ],
  },
  {
    name: "Legacy Modernization",
    description:
      "Transform outdated systems into modern, cloud-native architectures without disrupting your operations.",
    tech: [
      { name: "Docker",      logo: `${CDN}/docker/docker-original.svg`              },
      { name: "Kubernetes",  logo: `${CDN}/kubernetes/kubernetes-plain.svg`         },
      { name: "Terraform",   logo: `${CDN}/terraform/terraform-original.svg`        },
      { name: "Go",          logo: `${CDN}/go/go-original.svg`                      },
      { name: "Rust",        logo: `${CDN}/rust/rust-original.svg`                  },
      { name: ".NET Core",   logo: `${CDN}/dotnetcore/dotnetcore-original.svg`      },
      { name: "Java",        logo: `${CDN}/java/java-original.svg`                  },
      { name: "Spring",      logo: `${CDN}/spring/spring-original.svg`              },
      { name: "React",       logo: `${CDN}/react/react-original.svg`                },
      { name: "PostgreSQL",  logo: `${CDN}/postgresql/postgresql-original.svg`      },
      { name: "Redis",       logo: `${CDN}/redis/redis-original.svg`                },
      { name: "Kafka",       logo: `${CDN}/apachekafka/apachekafka-original.svg`    },
      { name: "AWS",         logo: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Azure",       logo: `${CDN}/azure/azure-original.svg`                },
      { name: "GitHub",      logo: `${CDN}/github/github-original.svg`              },
      { name: "Linux",       logo: `${CDN}/linux/linux-original.svg`                },
    ],
  },
  {
    name: "Mobile Development",
    description:
      "Native and cross-platform mobile apps built for performance, usability, and scale across iOS and Android.",
    tech: [
      { name: "React Native",logo: `${CDN}/react/react-original.svg`                },
      { name: "Flutter",     logo: `${CDN}/flutter/flutter-original.svg`            },
      { name: "Swift",       logo: `${CDN}/swift/swift-original.svg`                },
      { name: "Kotlin",      logo: `${CDN}/kotlin/kotlin-original.svg`              },
      { name: "TypeScript",  logo: `${CDN}/typescript/typescript-original.svg`      },
      { name: "Firebase",    logo: `${CDN}/firebase/firebase-plain.svg`             },
      { name: "Android",     logo: `${CDN}/android/android-original.svg`            },
      { name: "Xcode",       logo: `${CDN}/xcode/xcode-original.svg`                },
      { name: "GraphQL",     logo: `${CDN}/graphql/graphql-plain.svg`               },
      { name: "Node.js",     logo: `${CDN}/nodejs/nodejs-original.svg`              },
      { name: "Redux",       logo: `${CDN}/redux/redux-original.svg`                },
      { name: "MongoDB",     logo: `${CDN}/mongodb/mongodb-original.svg`            },
      { name: "PostgreSQL",  logo: `${CDN}/postgresql/postgresql-original.svg`      },
      { name: "Redis",       logo: `${CDN}/redis/redis-original.svg`                },
      { name: "AWS",         logo: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Docker",      logo: `${CDN}/docker/docker-original.svg`              },
    ],
  },
  {
    name: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure, CI/CD pipelines, and automated deployments that keep your systems resilient.",
    tech: [
      { name: "AWS",         logo: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Azure",       logo: `${CDN}/azure/azure-original.svg`                },
      { name: "GCP",         logo: `${CDN}/googlecloud/googlecloud-original.svg`    },
      { name: "Docker",      logo: `${CDN}/docker/docker-original.svg`              },
      { name: "Kubernetes",  logo: `${CDN}/kubernetes/kubernetes-plain.svg`         },
      { name: "Terraform",   logo: `${CDN}/terraform/terraform-original.svg`        },
      { name: "Ansible",     logo: `${CDN}/ansible/ansible-original.svg`            },
      { name: "GitHub",      logo: `${CDN}/github/github-original.svg`              },
      { name: "GitLab",      logo: `${CDN}/gitlab/gitlab-original.svg`              },
      { name: "Jenkins",     logo: `${CDN}/jenkins/jenkins-original.svg`            },
      { name: "Prometheus",  logo: `${CDN}/prometheus/prometheus-original.svg`      },
      { name: "Grafana",     logo: `${CDN}/grafana/grafana-original.svg`            },
      { name: "Linux",       logo: `${CDN}/linux/linux-original.svg`                },
      { name: "Nginx",       logo: `${CDN}/nginx/nginx-original.svg`                },
      { name: "ArgoCD",      logo: `${CDN}/argocd/argocd-original.svg`              },
      { name: "Bash",        logo: `${CDN}/bash/bash-original.svg`                  },
    ],
  },
  {
    name: "AI & Machine Learning",
    description:
      "End-to-end ML pipelines, LLM integrations, and intelligent automation tailored to your data and workflows.",
    tech: [
      { name: "Python",      logo: `${CDN}/python/python-original.svg`              },
      { name: "TensorFlow",  logo: `${CDN}/tensorflow/tensorflow-original.svg`      },
      { name: "PyTorch",     logo: `${CDN}/pytorch/pytorch-original.svg`            },
      { name: "NumPy",       logo: `${CDN}/numpy/numpy-original.svg`                },
      { name: "Pandas",      logo: `${CDN}/pandas/pandas-original.svg`              },
      { name: "Jupyter",     logo: `${CDN}/jupyter/jupyter-original.svg`            },
      { name: "OpenCV",      logo: `${CDN}/opencv/opencv-original.svg`              },
      { name: "Scala",       logo: `${CDN}/scala/scala-original.svg`                },
      { name: "FastAPI",     logo: `${CDN}/fastapi/fastapi-original.svg`            },
      { name: "PostgreSQL",  logo: `${CDN}/postgresql/postgresql-original.svg`      },
      { name: "MongoDB",     logo: `${CDN}/mongodb/mongodb-original.svg`            },
      { name: "Azure",       logo: `${CDN}/azure/azure-original.svg`                },
      { name: "AWS",         logo: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Docker",      logo: `${CDN}/docker/docker-original.svg`              },
      { name: "Kubernetes",  logo: `${CDN}/kubernetes/kubernetes-plain.svg`         },
      { name: "Go",          logo: `${CDN}/go/go-original.svg`                      },
    ],
  },
  {
    name: "Staff Augmentation",
    description:
      "Embed experienced, pre-vetted engineers directly into your team, on-demand and ready to ship from day one.",
    tech: [
      { name: "React",       logo: `${CDN}/react/react-original.svg`                },
      { name: "TypeScript",  logo: `${CDN}/typescript/typescript-original.svg`      },
      { name: "Node.js",     logo: `${CDN}/nodejs/nodejs-original.svg`              },
      { name: "Next.js",     logo: `${CDN}/nextjs/nextjs-original.svg`              },
      { name: "Go",          logo: `${CDN}/go/go-original.svg`                      },
      { name: "Rust",        logo: `${CDN}/rust/rust-original.svg`                  },
      { name: "Python",      logo: `${CDN}/python/python-original.svg`              },
      { name: "Java",        logo: `${CDN}/java/java-original.svg`                  },
      { name: ".NET Core",   logo: `${CDN}/dotnetcore/dotnetcore-original.svg`      },
      { name: "Vue.js",      logo: `${CDN}/vuejs/vuejs-original.svg`                },
      { name: "Angular",     logo: `${CDN}/angularjs/angularjs-original.svg`        },
      { name: "PostgreSQL",  logo: `${CDN}/postgresql/postgresql-original.svg`      },
      { name: "Docker",      logo: `${CDN}/docker/docker-original.svg`              },
      { name: "AWS",         logo: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Kubernetes",  logo: `${CDN}/kubernetes/kubernetes-plain.svg`         },
      { name: "Redis",       logo: `${CDN}/redis/redis-original.svg`                },
    ],
  },
  {
    name: "Data & Analytics",
    description:
      "Modern data stacks, pipelines, and BI solutions that turn raw data into decisions your business can act on.",
    tech: [
      { name: "Python",      logo: `${CDN}/python/python-original.svg`              },
      { name: "PostgreSQL",  logo: `${CDN}/postgresql/postgresql-original.svg`      },
      { name: "MongoDB",     logo: `${CDN}/mongodb/mongodb-original.svg`            },
      { name: "Scala",       logo: `${CDN}/scala/scala-original.svg`                },
      { name: "Jupyter",     logo: `${CDN}/jupyter/jupyter-original.svg`            },
      { name: "NumPy",       logo: `${CDN}/numpy/numpy-original.svg`                },
      { name: "Pandas",      logo: `${CDN}/pandas/pandas-original.svg`              },
      { name: "Kafka",       logo: `${CDN}/apachekafka/apachekafka-original.svg`    },
      { name: "Redis",       logo: `${CDN}/redis/redis-original.svg`                },
      { name: "Azure",       logo: `${CDN}/azure/azure-original.svg`                },
      { name: "AWS",         logo: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "GCP",         logo: `${CDN}/googlecloud/googlecloud-original.svg`    },
      { name: "Terraform",   logo: `${CDN}/terraform/terraform-original.svg`        },
      { name: "Docker",      logo: `${CDN}/docker/docker-original.svg`              },
      { name: "Elasticsearch", logo: `${CDN}/elasticsearch/elasticsearch-original.svg` },
      { name: "Airflow",     logo: `${CDN}/apacheairflow/apacheairflow-original.svg` },
    ],
  },
  {
    name: "QA & Testing",
    description:
      "Comprehensive test coverage and quality assurance processes that give your team the confidence to ship faster.",
    tech: [
      { name: "Jest",        logo: `${CDN}/jest/jest-plain.svg`                     },
      { name: "Cypress",     logo: `${CDN}/cypressio/cypressio-original.svg`        },
      { name: "Selenium",    logo: `${CDN}/selenium/selenium-original.svg`          },
      { name: "Playwright",  logo: `${CDN}/playwright/playwright-original.svg`      },
      { name: "Python",      logo: `${CDN}/python/python-original.svg`              },
      { name: "Java",        logo: `${CDN}/java/java-original.svg`                  },
      { name: "TypeScript",  logo: `${CDN}/typescript/typescript-original.svg`      },
      { name: "GitHub",      logo: `${CDN}/github/github-original.svg`              },
      { name: "GitLab",      logo: `${CDN}/gitlab/gitlab-original.svg`              },
      { name: "Docker",      logo: `${CDN}/docker/docker-original.svg`              },
      { name: "Jenkins",     logo: `${CDN}/jenkins/jenkins-original.svg`            },
      { name: "Grafana",     logo: `${CDN}/grafana/grafana-original.svg`            },
      { name: "Postman",     logo: `${CDN}/postman/postman-original.svg`            },
      { name: "Linux",       logo: `${CDN}/linux/linux-original.svg`                },
      { name: "Bash",        logo: `${CDN}/bash/bash-original.svg`                  },
      { name: "Kubernetes",  logo: `${CDN}/kubernetes/kubernetes-plain.svg`         },
    ],
  },
  {
    name: "Embedded & IoT",
    description:
      "Firmware, protocol integration, and IoT platforms that connect edge devices to the cloud, reliably and at scale.",
    tech: [
      { name: "C / C++",     logo: `${CDN}/c/c-original.svg`                        },
      { name: "C++",         logo: `${CDN}/cplusplus/cplusplus-original.svg`        },
      { name: "Rust",        logo: `${CDN}/rust/rust-original.svg`                  },
      { name: "Python",      logo: `${CDN}/python/python-original.svg`              },
      { name: "Linux",       logo: `${CDN}/linux/linux-original.svg`                },
      { name: "Raspberry Pi",logo: `${CDN}/raspberrypi/raspberrypi-original.svg`    },
      { name: "Arduino",     logo: `${CDN}/arduino/arduino-original.svg`            },
      { name: "Node.js",     logo: `${CDN}/nodejs/nodejs-original.svg`              },
      { name: "React",       logo: `${CDN}/react/react-original.svg`                },
      { name: "PostgreSQL",  logo: `${CDN}/postgresql/postgresql-original.svg`      },
      { name: "Redis",       logo: `${CDN}/redis/redis-original.svg`                },
      { name: "Kafka",       logo: `${CDN}/apachekafka/apachekafka-original.svg`    },
      { name: "Docker",      logo: `${CDN}/docker/docker-original.svg`              },
      { name: "AWS",         logo: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Grafana",     logo: `${CDN}/grafana/grafana-original.svg`            },
      { name: "Bash",        logo: `${CDN}/bash/bash-original.svg`                  },
    ],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const svc = services[active];

  return (
    <section id="services" className="bg-[#0a0a0a] section-padding py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Top row */}
        <div className="flex items-start justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-lg">
            <span className="font-bold text-white">We Build </span>
            <span className="font-light text-white/50">Production-Ready</span>
            <br />
            <span className="font-bold text-white">Software </span>
            <span className="font-light text-white/50">That Scales</span>
          </h2>
          <a
            href="#services"
            className="flex-shrink-0 mt-1 px-5 py-2.5 rounded-full border border-white/20 text-white/70 text-sm hover:border-white/50 hover:text-white transition-all"
          >
            View our Services
          </a>
        </div>

        {/* Two-column */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 items-stretch">
          {/* Left - service list */}
          <div className="flex flex-col gap-2">
            {services.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-4 rounded-2xl border border-white/[0.06] transition-all duration-200 ${
                  i === active
                    ? "bg-[#0d0f12] text-white"
                    : "bg-[#0d0f12]/60 text-white/45 hover:bg-[#0d0f12] hover:text-white/80"
                }`}
              >
                <span className="text-base font-medium">{s.name}</span>
              </button>
            ))}
          </div>

          {/* Right - detail panel */}
          <div className="bg-[#0d0f12] border border-white/[0.06] rounded-2xl p-8 flex flex-col">
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3">
              {svc.name.split(" ").slice(0, 1).join(" ")}{" "}
              <span className="font-light text-white/55">
                {svc.name.split(" ").slice(1).join(" ")}
              </span>
            </h3>

            {/* Description */}
            <p className="text-white/45 text-sm leading-relaxed mb-8">
              {svc.description}
            </p>

            {/* Technology row */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-medium text-[#6366f1]">Technology</span>
              <div className="flex-1 border-t border-dashed border-white/15" />
            </div>

            {/* Tech logos */}
            <div className="grid grid-cols-8 gap-3 mb-10">
              {svc.tech.map((t) => (
                <div key={t.name} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/[0.06] p-2.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.logo}
                      alt={t.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs text-white/40 text-center leading-tight max-w-[56px]">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-wrap mt-auto">
              <a
                href={`/contact?type=${serviceContactTypes[svc.name] ?? "general"}`}
                className="inline-block px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm hover:border-white/50 hover:text-white transition-all"
              >
                Get Started
              </a>
              {servicePageUrls[svc.name] && (
                <a
                  href={servicePageUrls[svc.name]}
                  className="inline-flex items-center gap-1.5 text-sm text-[#6366f1] font-medium hover:gap-2.5 transition-all"
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
