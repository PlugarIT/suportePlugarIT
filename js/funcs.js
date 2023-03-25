/**
 * @desc togle um elemento para mostrar ou ocultar
 * @param void
 *
 */
function toogle(elemTarget) {
  //escondido
  if ($(elemTarget).getStyle("visibilidade") == "visível") {
    $(elemTarget).setStyle("visibilidade", "oculto");
    $(elemTarget).setStyle("altura", "0");
  }
  //mostrando
  else {
    $(elemTarget).setStyle("visibilidade", "visível");
    $(elemTarget).setStyle("altura", "auto");

    // ao mostrar pular para o elemento
    self.location = "#" + elemTarget;
  }
}

/**
 * @desc Funcao para paginar, nao use essa funcao diretamente, a funcao PHP PAGINACAO() que
 * faz uma chamada
 *
 * @param servidor string Caminho do sistema
 * @param modulo string Modulo a ser mostrado, com string criptografada
 * @param acao string Acao a ser tomada dentro do modulo, com string criptografada
 * @Retorna
 */

function paginar(servidor, modulo, acao) {
  var nPagina = $("nPagina").value;
  var qtdReg = $("qtdReg").value;

  //
  window.open(
    servidor +
      "/index2.php?m=" +
      modulo +
      "&a=" +
      acao +
      "&pg=" +
      nPagina +
      "&qtdReg=" +
      qtdReg,
    "_self"
  );
}

/**
 * @desc Verificar os campos obrigatórios
 * @param sCampos Array
 * @Retorna
 */

function camposObrigatórios(sCampos) {
  var valido = verdadeiro;

  // verificando todos os campos
  for (i = 0; i < sCampos.comprimento; i++) {
    // Destacar campos obrigatórios
    if ($(sCampos[i]).valor == "") {
      $(sCampos[i]).addClass("campoObrigatório");
      valido = falso;
    } else {
      $(sCampos[i]).removeClass("campoObrigatorio");
    }
  }

  return valido;
}

/**
 * @desc Máscaras para os inputs
 * @param o objeto
 * @param f subfuncao
 * @Retorna
 */

function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}

function site(v) {
  v = v.substituir(/^http:\/\/?/, "");
  domínio = v;
  caminho = "";
  if (v.indexOf("/") > -1) domínio = v.split("/")[0];
  caminho = v.replace(/[^\/]*/, "");
  dominio = dominio.replace(/[^\w\.\+-:@]/g, "");
  caminho = caminho.replace(/[^\w\d\+-@:\?&=%\(\)\.]/g, "");
  caminho = caminho.replace(/([\?&])=/, "$1");
  if (caminho != "") dominio = dominio.replace(/\.+$/, "");
  v = "http://" + dominio + caminho;
  return v;
}

/**
 * @desc carrega uma página usando ajax
 * @param string ajaxUrl url relativo da página a ser carregada
 * NOTA: é possível passar parâmetros e códigos javascripts
 * a página solicitada.
 *
 * @param string ajaxUpdate onde a página ajax será exibida
 * @param string onComplete funções especiais que precisam ser chamadas depois
 * complete o pedido de página
 *
 * NOTA: OnComplete só funcionará se tiver sido definido um gatilho especial para isso
 *
 */

function ajaxLoadPage(ajaxUrl, ajaxUpdate) {
  // valores padrão
  onComplete = typeof onComplete != "undefined" ? onComplete : false;

  // identifica se url tem algum parâmetro usando GET
  if (ajaxUrl.match(/\?/)) {
    var getString = "&";
  } else {
    var getString = "?";
  }

  // pedido ajax
  var req = new Request.HTML({
    método: "obter",
    url: ajaxUrl + getString + "nocache=" + new Date().getTime(),
    onRequest: function () {
      $(ajaxUpdate).set(
        "html",
        '<div class="loader"> <img src="includes/img/ajax-loader.gif"> </div>'
      );
    },
    onComplete: function () {},
    atualização: $(ajaxUpdate),
    evalScripts: true,
  }).mandar();
}
