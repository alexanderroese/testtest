// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: etJvkmnv36msier2xQhWQ3
// Component: ciXHcf7Mug-R

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantsv9IufRRxwlF8 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: V9iufRRxwlF8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: etJvkmnv36msier2xQhWQ3/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: ciXHcf7Mug-R/css

import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: BSqiHEkTMNtn/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: Da0UkF40ObKp/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: M-nA4TGwNdyz/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Nmw3f96hGio7/icon

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsv9IufRRxwlF8()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__ehNm7)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zPLO)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__cBChb)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___1NxQ1)}
            >
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3___2Ljvc
                )}
              >
                {"Company Name"}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7FzM
                )}
              >
                <React.Fragment>
                  <React.Fragment>
                    {"This site proudly built in "}
                  </React.Fragment>
                  {
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        projectcss.plasmic_default__inline,
                        sty.link__xh2La
                      )}
                      component={Link}
                      href={"https://www.plasmic.app"}
                      platform={"nextjs"}
                    >
                      {"Plasmic"}
                    </PlasmicLink__>
                  }
                  <React.Fragment>{"."}</React.Fragment>
                </React.Fragment>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mq2Ud
                )}
              >
                {"Connect with us"}
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wdz1Q)}
              >
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__rwbb
                  )}
                  component={Link}
                  href={"#"}
                  platform={"nextjs"}
                  target={"_blank"}
                >
                  <Icon3Icon
                    className={classNames(projectcss.all, sty.svg__q1JlB)}
                    role={"img"}
                  />
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__r5TL4
                  )}
                  component={Link}
                  href={"#"}
                  platform={"nextjs"}
                  target={"_blank"}
                >
                  <Icon2Icon
                    className={classNames(projectcss.all, sty.svg___1UFjs)}
                    role={"img"}
                  />
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__cOeof
                  )}
                  component={Link}
                  href={"#"}
                  platform={"nextjs"}
                  target={"_blank"}
                >
                  <Icon28Icon
                    className={classNames(projectcss.all, sty.svg__lojpU)}
                    role={"img"}
                  />
                </PlasmicLink__>
              </Stack__>
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__heJwe)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__wyMsI
              )}
            >
              {"Photography"}
            </h3>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__vrt5I
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__uHiQv)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xsSNj
                )}
              >
                {"Services"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__zBiJj)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__gdkYp
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__zkyoa)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1Q0Mp
                )}
              >
                {"Stories"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__jZigO)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ggmbe)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__tgevn
              )}
            >
              {"Company"}
            </h3>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__el87C
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__dGczf)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nMlaA
                )}
              >
                {"Contact us"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__c8JEj)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__gEjRn
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__yeRve)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rTBoT
                )}
              >
                {"About us"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__tFt)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
          </Stack__>
        </Stack__>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
